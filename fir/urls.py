from django.urls import path
from . import views

urlpatterns = [
    path("send-verification-email/", views.send_verification_email, name="send_verification_email"),
    path("verify-email/", views.verify_email, name="verify_email"),  # ✅ Add this line
    path("generate-qr/", views.generate_qr, name="generate_qr"),
    path("verify-otp/", views.verify_otp, name="verify_otp"),
    path("signup/", views.signup, name="signup"),
]
