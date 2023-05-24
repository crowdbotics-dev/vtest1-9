
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import MeetupssViewSet
router = DefaultRouter()
router.register('meetupss', MeetupssViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
