from rest_framework import serializers
from com.models import school,schoolClass,Address,Countries,States,codeGroup,code,Districts

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        #fields = '__all__'
        fields = ( 'line1','line2','city','districtID','stateID','pincode','countryID')
   
class SchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = school
        #fields = '__all__'
        fields = ( 'schoolName','schoolTypeCodeID','addressID','UDISEcode','phone')
   

class schoolClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = schoolClass
        #fields = '__all__'
        fields = ( 'schoolID','classNumber')
   

   
