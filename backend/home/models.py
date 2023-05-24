from django.conf import settings
from django.db import models
class User(models.Model):
    'Generated Model'
    email = models.EmailField(max_length=254,)
    password = models.CharField(max_length=200,)
class Home(models.Model):
    'Generated Model'
    value1 = models.CharField(max_length=256,)
