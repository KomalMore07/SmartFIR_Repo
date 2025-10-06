import json
import random
from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils import timezone
from django.conf import settings
from .models import Victim, EmailVerification


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


@csrf_exempt
def signup(request):
    """
    Registers a new victim only if email is verified.
    """
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            email = data.get("email")

            if not email:
                return JsonResponse({"error": "Email is required"}, status=400)

            if not Victim.objects.filter(email=email, is_verified=True).exists():
                return JsonResponse({"error": "Please verify your email first."}, status=400)

            victim = Victim.objects.create(
                first_name=data.get("firstName"),
                last_name=data.get("lastName"),
                address=data.get("address"),
                city=data.get("city"),
                state=data.get("state"),
                pincode=data.get("pincode"),
                country=data.get("country"),
                email=email,
                aadhaar=data.get("aadhaar"),
                phone=data.get("phone"),
                created_at=timezone.now(),
                is_verified=True,
            )

            return JsonResponse({"message": "Signup successful!", "id": victim.id})

        except Exception as e:
            print("❌ Signup error:", e)
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Invalid request"}, status=400)
