from rest_framework import serializers
from .models import Victim

class VictimSerializer(serializers.ModelSerializer):
    class Meta:
        model = Victim
        # '__all__' now includes the newly added fields from the model
        fields = '__all__'
