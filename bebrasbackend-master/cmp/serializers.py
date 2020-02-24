from rest_framework import serializers
from .models import *
class CmpEnrollmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = studentEnrollment
        #fields = '__all__'
        fields = ( 'competitionAgeID','languageCodeID','userID')
        
