# Generated by Django 4.0 on 2022-01-23 01:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_fcitian_fmail'),
    ]

    operations = [
        migrations.AddField(
            model_name='fcitian',
            name='fname',
            field=models.CharField(max_length=50, null=True, verbose_name='First Name'),
        ),
        migrations.AddField(
            model_name='fcitian',
            name='lname',
            field=models.CharField(max_length=50, null=True, verbose_name='Last Name'),
        ),
    ]
