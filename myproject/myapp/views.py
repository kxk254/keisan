from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Define a simple view for the root URL
def home(request):
    return HttpResponse("Welcome to the homepage!")

class HelloWorld(APIView):
    def get(self, request):
        return Response({"message": "Hello, World!"}, status=status.HTTP_200_OK)
