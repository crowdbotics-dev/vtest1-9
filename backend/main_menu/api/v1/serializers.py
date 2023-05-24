from rest_framework import serializers
from main_menu.models import Main_menu

class Main_menuSerializer(serializers.ModelSerializer):

    class Meta:
        model = Main_menu
        fields = "__all__"