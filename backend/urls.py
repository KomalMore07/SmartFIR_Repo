from django.contrib import admin
from django.urls import path
from . import views   # 👈 import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name="index"),  # 👈 default route goes to index.html
]
