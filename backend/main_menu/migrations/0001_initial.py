# Generated by Django 2.2.28 on 2023-05-24 11:06

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Main_menu',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('value2', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='main_menu_value2', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
