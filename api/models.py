from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from django.utils import timezone

from django.utils.translation import gettext_lazy as _

from .managers import CustomFCITianManager

# Create your models here.

# creating custom user.


class FCITian(AbstractBaseUser, PermissionsMixin):
    verbose_name = _("The FCITian")
    verbose_name_plural = _("The FCITians")
    fname = models.CharField(_("First Name"), max_length=50, null=True)
    lname = models.CharField(_("Last Name"), max_length=50, null=True)
    fmail = models.EmailField(_("FCIT Email Adress"), unique=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)

    USERNAME_FIELD = 'fmail'
    REQUIRED_FIELDS = []

    objects = CustomFCITianManager()

    def __str__(self):
        return self.fmail
