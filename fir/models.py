from django.db import models
from django.utils import timezone

class Victim(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    address = models.TextField()
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    pincode = models.CharField(max_length=10)
    country = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    aadhaar = models.CharField(max_length=12, unique=True)
    phone = models.CharField(max_length=15, unique=True)
    is_verified = models.BooleanField(default=False)
    is_phone_verified = models.BooleanField(default=False)  # ✅ New field
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.email})"


class EmailVerification(models.Model):
    email = models.EmailField(unique=True)
    token = models.CharField(max_length=100, unique=True)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"{self.email} - {self.token}"


class PhoneVerification(models.Model):  # ✅ New model
    phone = models.CharField(max_length=15, unique=True)
    otp = models.CharField(max_length=6)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"{self.phone} - {self.otp}"
