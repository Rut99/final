from rest_framework import serializers
from .models import User,UserManager,UserRole,UserRoleLocation
from django.contrib.auth import authenticate

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        #fields = '__all__'
        fields = ( 'userName','loginID','birthdate')
        

class StudentSerializer(serializers.ModelSerializer):
   class Meta:
        model = User
        #fields = '__all__'
        fields = ( 'userName','loginID','password')
        

class RegisterSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ( 'userName','password','gender','birthdate','phone','email','loginID')
    extra_kwargs = {'password': {'write_only': True}}

  def create(self, validated_data):
    print("IN SERIALIZER",validated_data['loginID'])
    user = User.objects.create_user(validated_data['userName'], validated_data['password'],validated_data['gender'],validated_data['birthdate'],validated_data['phone'],validated_data['email'],validated_data['loginID'])
    print("user",user)
    return user

class UserRoleLocationSerializer(serializers.ModelSerializer):
  class Meta:
    model = UserRoleLocation
    fields = ( 'userRoleID','locationTypeCodeID','locationObjectID')

class UserRoleSerializer(serializers.ModelSerializer):
  class Meta:
    model = UserRole
    fields = ( 'userID','RoleID')

class LoginSerializer(serializers.Serializer):
 
  loginID = serializers.CharField()
  password = serializers.CharField()
 
  def validate(self, data):
   
    user = authenticate(**data)
   
    if user and user.is_active:
      return user
    raise serializers.ValidationError("Incorrect Credentials")

