from django.shortcuts import render
from django.http import HttpResponse  # added this method
from rest_framework import generics
# from .serializers import  UserSerializer, CreateUserSerializer
from .models import FCITian
from rest_framework.views import APIView
# Create your views here.

# added this method


def welcome(request):
    return HttpResponse("Hello From API - welcome")

# class RegisterView(APIView):
#     # queryset = FCITian.objects.all()
#     serializer_class = CreateUserSerializer