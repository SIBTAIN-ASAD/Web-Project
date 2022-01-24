from dataclasses import field
from statistics import mode
from  .models import FCITian
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = FCITian
        fields = ['id', 'fname', 'lname', 'fmail', 'password', 'is_active', 'is_staff', 'date_joined']
        read_only_field = ['is_active', 'date_joined']