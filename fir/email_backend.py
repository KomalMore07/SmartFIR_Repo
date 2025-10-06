import ssl
from django.core.mail.backends.smtp import EmailBackend as DjangoEmailBackend

class NoVerifySMTPBackend(DjangoEmailBackend):
    """SMTP backend that disables SSL verification (for dev only)."""

    def open(self):
        if self.connection:
            return False

        try:
            # Create connection
            import smtplib

            self.connection = smtplib.SMTP(self.host, self.port, timeout=self.timeout)

            # 🔓 Disable SSL verification
            unverified_context = ssl._create_unverified_context()

            # Start TLS with unverified context
            if self.use_tls:
                self.connection.starttls(context=unverified_context)

            if self.username and self.password:
                self.connection.login(self.username, self.password)

            return True

        except Exception:
            if not self.fail_silently:
                raise
            return False
