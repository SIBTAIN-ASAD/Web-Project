# added all these
from django.urls import path  

from .views import welcome 

urlpatterns = [
    path('', welcome),
]
