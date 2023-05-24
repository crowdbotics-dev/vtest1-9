from rest_framework import authentication
from letsmeet.models import Meetupss
from .serializers import MeetupssSerializer
from rest_framework import viewsets

class MeetupssViewSet(viewsets.ModelViewSet):
    serializer_class = MeetupssSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Meetupss.objects.all()