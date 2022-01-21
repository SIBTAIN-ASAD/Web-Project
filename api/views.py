from django.shortcuts import render
from django.http import HttpResponse  # added this method
# Create your views here.

# added this method


def welcome(request):
    return HttpResponse("Hello From API - welcome")
