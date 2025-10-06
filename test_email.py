import smtplib
from email.mime.text import MIMEText

# Replace with your details
GMAIL_USER = "smartfir26@gmail.com"
APP_PASSWORD = "owjpfocshcjzlcyp"   # your 16-char app password
TO_EMAIL = "morekomal1941@gmail.com"    # where to receive the test mail

def send_test_email():
    try:
        # Create email
        msg = MIMEText("This is a test email sent via Gmail SMTP + App Password.")
        msg["Subject"] = "Gmail SMTP Test"
        msg["From"] = GMAIL_USER
        msg["To"] = TO_EMAIL

        # Connect to Gmail
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()  # secure the connection
        server.login(GMAIL_USER, APP_PASSWORD)
        server.sendmail(GMAIL_USER, [TO_EMAIL], msg.as_string())
        server.quit()

        print("✅ Email sent successfully!")

    except Exception as e:
        print("❌ Failed to send email:", e)

if __name__ == "__main__":
    send_test_email()
