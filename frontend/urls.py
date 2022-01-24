from django.urls import path
from .views import index

urlpatterns = [
    path('welcome/', index),
    path('login/', index),
    path('register/', index),
    path('home/', index),
    path('about/', index),
    path('explore/', index),
    path('contact/', index),
    path('team/', index),
    path('main/', index),
    path('cgpacalculator/', index),
    path('cgpacalculator/gpa', index),
    path('cgpacalculator/cgpa', index),
]
