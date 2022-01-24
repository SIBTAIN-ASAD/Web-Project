from pyexpat import model
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import FCITian

# Register your models here.


class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = FCITian

    list_display = ('fmail', 'is_staff', 'is_active',)
    list_filter = ('fmail', 'is_staff', 'is_active',)

    fieldsets = (
        (None, {'fields': ('fname', 'lname', 'fmail', 'password')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('fname', 'lname','fmail', 'password1', 'password2', 'is_staff', 'is_active')}
         ),
    )
    search_fields = ('fmail',)
    ordering = ('fmail',)


admin.site.register(FCITian, CustomUserAdmin)
