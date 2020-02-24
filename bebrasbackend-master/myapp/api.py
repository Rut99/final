from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import StudentSerializer, UserSerializer, RegisterSerializer, LoginSerializer,UserRoleSerializer,UserRoleLocationSerializer
from .models import *
from django.db.models import Q
from django.http import HttpResponse, JsonResponse
from rest_framework.views import APIView
from cmp.models import competitionAge,competition
from ques.models import *
from cmp.serializers import * 
from com.models import school,schoolClass,Address,Countries,States,codeGroup,code,Districts
from com.serializers import AddressSerializer,SchoolSerializer,schoolClassSerializer
from .constants import  studentEnrollmentdata,TeacherRoleID,StudentRoleID,data1,schoolclassdata1,userRoleLocationdata
import random
import string
import requests 

class StudentBulkRegisterAPI(generics.GenericAPIView):

    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = RegisterSerializer

    def post(self, request):
      try:
        responsedata=[]
        print(request.data)
        userrole=UserRole.objects.get(userID=request.user.id)
        userrolelocation=UserRoleLocation.objects.get(userRoleID=userrole.userRoleID)
        print(userrolelocation.locationObjectID)
        School=school.objects.get(schoolID=userrolelocation.locationObjectID)
        schoolclass=schoolClass.objects.get(Q(schoolID=School.schoolID)&Q(classNumber=request.data['classNumber']))
        print(schoolclass.schoolClassID)
        cmpName=request.data['competitionName']
        print(cmpName)
        comp=competition.objects.get(competitionName=cmpName)
        print(comp.competitionID)
        cmpage=competitionAge.objects.get(Q(competitionID=comp.competitionID)&Q(schoolClassID=schoolclass.schoolClassID))
        print(cmpage)
        lang=request.data['language']
        langcode=code.objects.get(codeName=lang)
        print(langcode.codeID)
        studentEnrollmentdata['competitionAgeID']=cmpage.competitionAgeID
        studentEnrollmentdata['languageCodeID']=langcode.codeID
        print(studentEnrollmentdata)
        studentdata=request.data['user']
        for data in studentdata:
          print(data['loginID'])
          user=User.objects.get(loginID=data['loginID'])
          print(user.id)
          studentEnrollmentdata['userID']=user.id
          print(studentEnrollmentdata)
          serializer=CmpEnrollmentSerializer(data=studentEnrollmentdata)
          if serializer.is_valid():
            
            enrolledstudent = serializer.save()
            enrolledstudent=CmpEnrollmentSerializer(enrolledstudent, context=self.get_serializer_context()).data
            responsedata.append(enrolledstudent)
            print("Object saved")
          print(responsedata)
        return JsonResponse(responsedata, safe=False,status=200)
      except:
        return HttpResponse(serializer.errors)

class StudentRegisterAPI(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated,]
    serializer_class = RegisterSerializer
  
    def loginID_generator(first_name,last_name):
      
      val = "{0}{1}".format(first_name[0],last_name).lower()
      x=0
      while True:
          if x == 0 and User.objects.filter(loginID=val).count() == 0:
              return val
          else:
              new_val = "{0}{1}".format(val,x)
              print("trying",new_val)
              if User.objects.filter(loginID=new_val).count() == 0:
                return new_val
          x += 1
          if x > 1000000:
              raise Exception("Name is super popular!")

    def password_generator(Firstname,Lastname):
      password="CSBC"
      u_id = User.objects.latest('id')
      u_id=u_id.id+1
      password=password+Firstname+Lastname[0]+str(u_id)
      return password

    def newpassword_generator(Firstname,Lastname):
      password_characters ="CSBC"+ string.ascii_letters+  string.digits  
      password=random.choice(Firstname[0].upper())
      password=password+random.choice(string.punctuation)
      password=password+random.choice(Lastname.lower())
      password=password+random.choice(string.punctuation)
      newpassword= ''.join(random.choice(password_characters) for i in range(8))
      return password+newpassword

    def post(self, request):
      try:
        print(request.data)
        Firstname=request.data['firstName']
        Lastname=request.data['lastName']
        username=Firstname+Lastname
        Code=code.objects.get(codeName=request.data['gender'])
        request.data['gender']=Code.codeID
        request.data['userName']=username
        loginID=StudentRegisterAPI.loginID_generator(Firstname,Lastname)
        request.data['loginID']=loginID
        print(request.data)
        password=StudentRegisterAPI.newpassword_generator(Firstname,Lastname)
        request.data['password']=password
        print(request.data)
        if not request.data['email']:
          request.data['email']=loginID
        if request.data['email']=='':
          request.data['email']=loginID
        print(request.data)
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
          user = serializer.save()  #if serialzer is valid,save data into myapp_ user table
          user=User.objects.get(loginID=loginID)
          user.created_by=request.user.id
          user.save()   
          data1['userID']=user.id  #data1 used from constants.py
          data1['RoleID']=StudentRoleID #TeacherRoleID used from constants.py
          roleserializer=UserRoleSerializer(data=data1) #dump into myapp_userrole table
          if roleserializer.is_valid():
            userroleid=roleserializer.save() # put data into userrole serializer  
          print("Student saved")
          return Response({ "firstName":Firstname,"lastName":Lastname,"userName":username,
                            "loginID":loginID,"password":password})

        else:
          raise_exception=True
          return JsonResponse(serializer.errors, status=400)
      except:
        return HttpResponse(status=404)

  # StudentBulk  Register API
class BulkRegisterAPI(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated,]
    serializer_class = RegisterSerializer

    def post(self, request):
      print(request.data)
      # print(request.META.get('HTTP_AUTHORIZATION'))
      responsedata=[]
      try:
        if isinstance(request.data, list):
          is_many = True 
        else:
          is_many = False
        print(is_many)
        token=request.META.get('HTTP_AUTHORIZATION')
        
        for data in request.data:
          #requesting StudentRegister API
          output= requests.post('http://localhost:8000/api/auth/student', json=data, headers={'Authorization': token})
          print(output.json())
          responsedata.append(output.json())
        # users = User.objects.filter(created_by=request.user.id)
        # print(request.user.id)
        # serializer = StudentSerializer(users, many=True)
        return JsonResponse(responsedata, safe=False,status=200)
      except:
        return HttpResponse(output.text)

  # TeacherRegister API
class TeacherRegisterAPI(generics.GenericAPIView):

    permission_classes = [permissions.AllowAny, ]
    serializer_class = RegisterSerializer

    def post(self, request):
      try:
        print(request.data)
        Code=code.objects.get(codeName=request.data['gender'])
        # print(Code.codeID)
        school1=school.objects.get(schoolName=request.data['school'])
        request.data['gender']=Code.codeID
        # print(request.data)
        request.data['loginID']=request.data['email']
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
          user = serializer.save()  #if serialzer is valid,save data into myapp_ user table
          data1['userID']=user.id  #data1 used from constants.py
          data1['RoleID']=TeacherRoleID #TeacherRoleID used from constants.py
          roleserializer=UserRoleSerializer(data=data1) #dump into myapp_userrole table
          if roleserializer.is_valid():
            userroleid=roleserializer.save() # put data into userrole serializer
            userRoleLocationdata["locationObjectID"]=school1.schoolID
            userRoleLocationdata["userRoleID"]=userroleid.userRoleID
            print(userRoleLocationdata)
            roleserializer=UserRoleLocationSerializer(data=userRoleLocationdata)
            if roleserializer.is_valid():
              userrolelocationid=roleserializer.save()
          print("Object saved")
          return Response({
          "user": UserSerializer(user, context=self.get_serializer_context()).data,
            })
        else:
          raise_exception=True
          print(serializer.errors)
          return JsonResponse({'reason': serializer.errors  },status=400)
      except:
        return HttpResponse(status=404)
  #When Teacher Registers Another Teacher
class TeacherRegistrationAPI(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = RegisterSerializer

    def post(self, request):
      try:
        print(request.data)
        Code=code.objects.get(codeName=request.data['gender'])
        request.data['gender']=Code.codeID
        request.data['loginID']=request.data['email']
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
          user = serializer.save()  #if serialzer is valid,save data into myapp_ user table
          user=User.objects.get(email=request.data['email'])
          user.created_by=request.user.id
          user.save()   
          usr_role=UserRole.objects.get(userID=request.user.id)
          # print(usr_role)
          usr_location=UserRoleLocation.objects.get(userRoleID=usr_role.userRoleID)
          # print(usr_location.locationObjectID,request.user.id)
          data1['userID']=user.id  #data1 used from constants.py
          data1['RoleID']=TeacherRoleID #TeacherRoleID used from constants.py
          roleserializer=UserRoleSerializer(data=data1) #dump into myapp_userrole table
          if roleserializer.is_valid():
            userroleid=roleserializer.save() # put data into userrole serializer
            userRoleLocationdata["locationObjectID"]=usr_location.locationObjectID
            userRoleLocationdata["userRoleID"]=userroleid.userRoleID
            print(userRoleLocationdata)
            roleserializer=UserRoleLocationSerializer(data=userRoleLocationdata)
            if roleserializer.is_valid():
              userrolelocationid=roleserializer.save()
          print("Object saved")
          return Response({
          "user": UserSerializer(user, context=self.get_serializer_context()).data,  })
        else:
          raise_exception=True
          print(serializer.errors)
          return JsonResponse({'reason': serializer.errors    },status=400)
      except:
        return HttpResponse(status=404)

  #Login API
class LoginAPI(generics.GenericAPIView):
    permission_classes = [
      permissions.AllowAny,
    ]
    serializer_class = LoginSerializer

    def post(self, request,format='json'):
      try:
        print(request.data['password'])
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
          user = serializer.validated_data #check if loginID and password match
          print(user)
          user1=User.objects.get(loginID=user.loginID)
          print(user1.loginID)
          user_role=UserRole.objects.get(userID=user1.id)
          print(user_role.RoleID.RoleID)
          role=Role.objects.get(RoleID=user_role.RoleID.RoleID)
          print(role.RoleName)
          return Response({
          "user": UserSerializer(user, context=self.get_serializer_context()).data,
         "userrole":role.RoleName,
          "token": AuthToken.objects.create(user)[1]
        })
        else:
          raise_exception=True
          return JsonResponse(serializer.errors, status=400)
      except:
        return HttpResponse(status=404)


  # Get All Users Created by a Teacher API
class UserViewAPI(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = UserSerializer

    def get(self, request, format=None):
      try:
        current_user = request.user
        print(current_user.id)
        userroles=UserRole.objects.filter(RoleID=StudentRoleID).values_list('userID', flat=True)
        print(list(userroles))
        test_ids=list(userroles)
        users = User.objects.filter(id__in=test_ids,created_by=current_user.id)
        serializer = UserSerializer(users, many=True)
        return JsonResponse({"users":serializer.data}, safe=False)
      except:
        
        return HttpResponse(status=401)
      
  # Get All Country Names API
class CountryNameAPI(APIView):
    permission_classes = [
      permissions.AllowAny,
    ]
    def get(self, request, format=None):
      try:
        countries = Countries.objects.all().values_list('nicename', flat=True)
        return JsonResponse({"countries":list(countries)},safe=True)
      except:
        return HttpResponse(status=404)
  # Get All School Names API
class SchoolNameAPI(APIView):

    permission_classes = [
      permissions.AllowAny,
    ]
    def get(self, request, format=None):
      try:
        school_names = school.objects.all().values_list('schoolName', flat=True)
        return JsonResponse({"schoolNames":list(school_names)},safe=True)
      except:
        return HttpResponse(status=404)

  # Get All State Names API
class StateNameAPI(APIView):
    permission_classes = [permissions.AllowAny,
    ]
    def post(self, request):
      try:
        country=Countries.objects.get(name=request.data['country'])
        states=States.objects.filter(countryID=country.countryID).values_list('name', flat=True)
        return JsonResponse({"states":list(states)}, safe=False)
      except:
        return HttpResponse(status=404)
      
class SchoolClassesAPI(APIView):

    permission_classes = [
      permissions.IsAuthenticated,
    ]
    def get(self, request):
      try:
        
        userrole=UserRole.objects.get(userID=request.user.id)
        userrolelocation=UserRoleLocation.objects.get(userRoleID=userrole.userRoleID)
        print(userrolelocation.locationObjectID)
        School=school.objects.get(schoolID=userrolelocation.locationObjectID)
        School=school.objects.get(schoolName=School.schoolName)
        schoolclass=schoolClass.objects.filter(schoolID=School.schoolID).values_list('classNumber', flat=True)
        return JsonResponse({"schoolClasses":list(schoolclass)}, safe=False)
      except:
        return HttpResponse(status=404)
  
  # Get All Cmp Names API
class CompetitionNameAPI(APIView):

    permission_classes = [
      permissions.IsAuthenticated,
    ]
    def post(self, request):
      try:
        print(request.data)
        userrole=UserRole.objects.get(userID=request.user.id)
        userrolelocation=UserRoleLocation.objects.get(userRoleID=userrole.userRoleID)
        print(userrolelocation.locationObjectID)
        School=school.objects.get(schoolID=userrolelocation.locationObjectID)
        School=school.objects.get(schoolName=School.schoolName)
       
        # print(School.schoolID)
        schoolclass=schoolClass.objects.get(Q(schoolID=School.schoolID)& Q(classNumber=request.data['class_id']))
        print(schoolclass)
        compAge=competitionAge.objects.filter(schoolClassID=schoolclass.schoolClassID).values_list('competitionID', flat=True)
        # compAge can be a lot
        print(list(compAge))
        # print(compAge.competitionAgeID,compAge.competitionID.competitionID,compAge.schoolClassID)
        comp=competition.objects.filter(competitionID__in=list(compAge)).values_list('competitionName', flat=True)
        # print(comp)
        return JsonResponse({"cmp_names":list(comp)}, safe=False)
      except:
        return HttpResponse(status=404)
      
  # Get All District Names API
class DistrictNameAPI(APIView):

    permission_classes = [
      permissions.AllowAny,
    ]
    def post(self, request):
      try:
        state=States.objects.get(name=request.data['state'])   
        districts=Districts.objects.filter(stateID=state.stateID).values_list('name', flat=True)
        return JsonResponse({"districts":list(districts)}, safe=False)
      except:
        return HttpResponse(status=404)
      
  # Get UserDetail API
class UserAPI(generics.RetrieveAPIView):

    permission_classes = [
      permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
      try:
        return self.request.user
      except:
        return HttpResponse(status=404)

  # School Register API  
class SchoolRegisterAPI(generics.GenericAPIView):
    permission_classes = [
      permissions.AllowAny,
    ]
    serializer_class = AddressSerializer
    def post(self, request):
      try:
        print(request.data)
        cl=request.data["classes"]
        country=Countries.objects.get(name=request.data['country'])
        state=States.objects.get(name=request.data['state'])      
        district=Districts.objects.get(name=request.data['district'])
        addressdata=request.data['address']
        schooldata=request.data['school']
        address={}
        school={}
        addressdata['districtID']=district.districtID
        addressdata['stateID']=state.stateID
        addressdata['countryID']=country.countryID
        print("address",addressdata)
        serializer = AddressSerializer(data=addressdata)
        if serializer.is_valid():
          address = serializer.save()
          typecode=code.objects.get(codeName=schooldata['schoolType'])
          schooldata['schoolTypeCodeID']=typecode.codeID
          schooldata['addressID']=address.addressID
          del schooldata['schoolType']
          print("school",schooldata)
          serializer = SchoolSerializer(data=schooldata)
          if serializer.is_valid():
            school = serializer.save()
            for i in cl:
              schoolclassdata1["schoolID"]=school.schoolID
              schoolclassdata1["classNumber"]=i
              # print(schoolclassdata1)
              serializer = schoolClassSerializer(data=schoolclassdata1)
              if serializer.is_valid():
                classes = serializer.save()
              
          return Response({
          "address": AddressSerializer(address, context=self.get_serializer_context()).data,
          "school":SchoolSerializer(school, context=self.get_serializer_context()).data,
          "classes":schoolClassSerializer(classes, context=self.get_serializer_context()).data,
            })
        else:
          raise_exception=True
          return JsonResponse(serializer.errors, status=400)
      except:
        print(serializer.errors)
        return JsonResponse({'reason': serializer.errors    },status=400)
  