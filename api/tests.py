# https://testdriven.io/blog/django-custom-user-model/
from django.test import TestCase

# Create your tests here.
from django.contrib.auth import get_user_model
from django.test import TestCase


class UsersManagersTests(TestCase):
    def test_create_user(self):
        User = get_user_model()
        user = User.objects.create_user(
            fname="Fname", lname="Lname", fmail='normal@user.com', password='foo')
        self.assertEqual(user.fmail, 'normal@user.com')
        self.assertEqual(user.fname, "Fname")
        self.assertEqual(user.lname, "Lname")
        self.assertTrue(user.is_active)
        self.assertFalse(user.is_staff)
        self.assertFalse(user.is_superuser)
        try:
            # username is None for the AbstractUser option
            # username does not exist for the AbstractBaseUser option
            self.assertIsNone(user.username)
        except AttributeError:
            pass
        with self.assertRaises(TypeError):
            User.objects.create_user()
        with self.assertRaises(TypeError):
            User.objects.create_user(fmail='')
        with self.assertRaises(ValueError):
            User.objects.create_user(
                fname='', lname='', fmail='', password="foo")

    def test_create_superuser(self):
        User = get_user_model()
        admin_user = User.objects.create_superuser(
            fname="Fname", lname="Lname", fmail='super@user.com', password='foo')
        self.assertEqual(admin_user.fmail, 'super@user.com')
        self.assertEqual(admin_user.fname, "Fname")
        self.assertEqual(admin_user.lname, "Lname")
        self.assertTrue(admin_user.is_active)
        self.assertTrue(admin_user.is_staff)
        self.assertTrue(admin_user.is_superuser)
        try:
            # username is None for the AbstractUser option
            # username does not exist for the AbstractBaseUser option
            self.assertIsNone(admin_user.username)
        except AttributeError:
            pass
        with self.assertRaises(ValueError):
            User.objects.create_superuser(
                fname='', lname='', fmail='super@user.com', password='foo', is_superuser=False)
