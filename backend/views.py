from django.shortcuts import render

from django.http import JsonResponse

def api_hello(request):
    return JsonResponse({"message": "Hello from Django API!"})

