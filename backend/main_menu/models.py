from django.conf import settings
from django.db import models
class Main_menu(models.Model):
    'Generated Model'
    value2 = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.PROTECT,related_name="main_menu_value2",)

# Create your models here.
