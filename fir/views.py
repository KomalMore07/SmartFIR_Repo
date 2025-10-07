import json
import random
import pyotp
import qrcode
import io
from django.core.mail import send_mail
from django.http import JsonResponse ,HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils import timezone
from django.conf import settings
from .models import Victim, EmailVerification, PhoneVerification


@csrf_exempt
def send_verification_email(request):
    """
    Sends a 6-digit verification OTP to the user's email.
    """
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            email = data.get("email")

            if not email:
                return JsonResponse({"error": "Email is required"}, status=400)

            # Generate a 6-digit OTP
            otp = str(random.randint(100000, 999999))

            # Store or update OTP in EmailVerification model
            EmailVerification.objects.update_or_create(
                email=email,
                defaults={"token": otp, "created_at": timezone.now()},
            )

            # Send OTP via email
            send_mail(
                subject="SmartFIR Email Verification Code",
                message=f"Your SmartFIR verification code is: {otp}\n\nUse this code to verify your email.",
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=[email],
                fail_silently=False,
            )

            return JsonResponse({"message": "Verification code sent successfully!"})

        except Exception as e:
            print("❌ Error sending email:", e)
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Invalid request"}, status=400)


@csrf_exempt
def verify_email(request):
    """
    Verifies the user's email by matching the OTP code.
    """
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            email = data.get("email")
            otp = data.get("otp")

            if not email or not otp:
                return JsonResponse({"error": "Email and OTP are required"}, status=400)

            record = EmailVerification.objects.filter(email=email, token=otp).first()
            if not record:
                return JsonResponse({"error": "Invalid or expired OTP"}, status=400)

            # Mark as verified
            Victim.objects.update_or_create(
                email=email,
                defaults={"is_verified": True, "created_at": timezone.now()},
            )

            # Delete the used OTP
            record.delete()

            return JsonResponse({"message": "Email verified successfully!"})

        except Exception as e:
            print("❌ OTP verification error:", e)
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Invalid request"}, status=400)

# Generate QR code for phone
def generate_qr(request):
    phone = request.GET.get("phone")
    if not phone:
        return JsonResponse({"error": "Phone number is required"}, status=400)

    # Create or fetch the phone record
    obj, created = PhoneVerification.objects.get_or_create(phone=phone)
    if created or not obj.secret:
        obj.secret = pyotp.random_base32()
        obj.created_at = timezone.now()
        obj.save()

    # Create TOTP and provisioning URI (for Google Authenticator)
    totp = pyotp.TOTP(obj.secret)
    uri = totp.provisioning_uri(name=phone, issuer_name="SmartFIR")

    # Generate QR image
    img = qrcode.make(uri)
    buf = io.BytesIO()
    img.save(buf, format="PNG")
    buf.seek(0)

    return HttpResponse(buf.getvalue(), content_type="image/png")

# Verify the OTP entered by the user
@csrf_exempt
def verify_otp(request):
    if request.method != "POST":
        return JsonResponse({"error": "Invalid request method"}, status=405)

    data = json.loads(request.body)
    phone = data.get("phone")
    otp = data.get("otp")

    if not phone or not otp:
        return JsonResponse({"error": "Phone and OTP are required"}, status=400)

    try:
        obj = PhoneVerification.objects.get(phone=phone)
    except PhoneVerification.DoesNotExist:
        return JsonResponse({"error": "Phone not registered"}, status=404)

    totp = pyotp.TOTP(obj.secret)
    if totp.verify(otp):
        obj.verified = True
        obj.save()
        return JsonResponse({"message": "✅ Phone verified successfully!"})
    else:
        return JsonResponse({"error": "❌ Invalid or expired OTP"}, status=400)



@csrf_exempt
def signup(request):
    """
    Registers a new victim only if email is verified.
    """
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            email = data.get("email")
            phone = data.get("phone")

            if not email:
                return JsonResponse({"error": "Email is required"}, status=400)
            
            if not phone:
                return JsonResponse({"error": "Phone number is required"}, status=400)

            # ✅ Check if email is already verified
            victim = Victim.objects.filter(email=email, is_verified=True).first()
            if not victim:
                return JsonResponse({"error": "Please verify your email first."}, status=400)
            
             # ✅ Check if phone is verified
            phone_record = PhoneVerification.objects.filter(phone=phone, verified=True).first()
            if not phone_record:
                return JsonResponse({"error": "Please verify your phone first."}, status=400)

            # ✅ Update existing record instead of creating a new one
            victim.first_name = data.get("firstName")
            victim.last_name = data.get("lastName")
            victim.address = data.get("address")
            victim.city = data.get("city")
            victim.state = data.get("state")
            victim.pincode = data.get("pincode")
            victim.country = data.get("country")
            victim.aadhaar = data.get("aadhaar")
            victim.phone = data.get("phone")
            victim.created_at = timezone.now()
            victim.is_verified = True
            victim.save()

            return JsonResponse({"message": "Signup successful!", "id": victim.id})

        except Exception as e:
            print("❌ Signup error:", e)
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Invalid request"}, status=400)
