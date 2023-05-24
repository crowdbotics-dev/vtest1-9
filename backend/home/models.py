from django.conf import settings
from django.db import models
class User(models.Model):
    'Generated Model'
    mail_address = models.EmailField(max_length=175,)
    password = models.CharField(max_length=175,)
class Home(models.Model):
    'Generated Model'
    mitsubhishi1 = models.CharField(max_length=175,)
