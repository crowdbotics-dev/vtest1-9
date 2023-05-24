from rest_framework import authentication
from main_menu.models import Main_menu
from .serializers import Main_menuSerializer
from rest_framework import viewsets

class Main_menuViewSet(viewsets.ModelViewSet):
    serializer_class = Main_menuSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Main_menu.objects.all()