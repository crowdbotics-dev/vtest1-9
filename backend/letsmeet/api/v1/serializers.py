from rest_framework import serializers
from letsmeet.models import Meetupss

class MeetupssSerializer(serializers.ModelSerializer):

    class Meta:
        model = Meetupss
        fields = "__all__"