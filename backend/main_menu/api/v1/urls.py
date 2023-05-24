
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import Main_menuViewSet
router = DefaultRouter()
router.register('main_menu', Main_menuViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
