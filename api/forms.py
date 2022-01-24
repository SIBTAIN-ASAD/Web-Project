# https://testdriven.io/blog/django-custom-user-model/
from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from .models import FCITian

# creating user creation forms for the updated (auth) table/model


class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = FCITian
        fields = ('fmail', )


class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = FCITian
        fields = ('fmail',)
