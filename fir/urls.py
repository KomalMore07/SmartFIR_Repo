from django.urls import path
from . import views

urlpatterns = [
    path("send-verification-email/", views.send_verification_email, name="send_verification_email"),
    path("verify-email/", views.verify_email, name="verify_email"),
    path("generate-qr/", views.generate_qr, name="generate_qr"),
    path("verify-otp/", views.verify_otp, name="verify_otp"),
    path("signup/", views.signup, name="signup"),
    path("login-victim/", views.login_victim, name="login_victim"),  # ✅ New Login API
     # 1. Put the specific 'save' path FIRST
    path("victim/profile/save/", views.save_profile, name="save_profile"), 
    
    # 2. Put the more general path SECOND, so it doesn't mistakenly match 'save' as an email
    path("victim/profile/<str:email>/", views.get_profile, name="get_profile"),
]
