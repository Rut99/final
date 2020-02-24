from django.shortcuts import render
from rest_framework import generics
from django.contrib.auth  import authenticate
from django.contrib.auth.hashers import make_password, check_password
from rest_framework.views import APIView
from rest_framework.response import Response
import json
from rest_framework import viewsets          # add this
from .serializers import LoginSerializer,UserSerializer      # add this
from .models import User                     # add this
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAdminUser,
    IsAuthenticatedOrReadOnly,
)
from rest_framework import generics, permissions
from django.db.models import Q
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from rest_framework.decorators import api_view,permission_classes
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser


# Create your views here.
@csrf_exempt
# @api_view(['POST'])
@permission_classes((IsAuthenticated,))

def User_list(request):
    """
    List all code snippets, or create a new snippet.
    """
    permission_classes = [ permissions.IsAuthenticated,]
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return JsonResponse(serializer.data, safe=False)

    if request.method == 'POST':
        try:    
            
            data = json.loads(request.body)
            print((data))
            d1 = data['username']
            d2 = data['password']
            
            users=User.objects.get(Q(userName=d1)& Q(password=d2))
            print("got User ",users)
            serializer = LoginSerializer(users)

            usertemp=User.objects.get(Q(userName=d1))
            passwod=usertemp.password
            answer=check_password(d2,passwod)
            print(answer)
            if answer==False:
                #raise Exception(User.DoesNotExist)
                return HttpResponse( "User not", status=404)
            #users=User.objects.get(Q(userName=d1)& Q(password=d2))
            #user1=authenticate(username=d1,password=d2)
            print("got User ",usertemp)
            serializer = LoginSerializer(usertemp)
            #token,_=Token.objects.get_or_create(user=user1)

            return JsonResponse(serializer.data)
        except User.DoesNotExist:
            
            #token,_=Token.objects.get_or_create(user=user1)
            
            return HttpResponse(status=404)
            #return HttpResponse({'token':token.key},status=404)







@csrf_exempt
def User_detail(request, format='json'):
    """
    Retrieve, update or delete a code snippet.
    """
  
        
    

    # if request.method == 'GET':
    #     serializer = UserSerializer(users)
    #     return JsonResponse(serializer.data)

    if request.method == 'PUT':
        try:
            data = JSONParser().parse(request)

            print(data)

            print(data['password'])
            
            # #print(serializer.get_value("password"))
            # hashed_pwd = make_password(data['password'])
            # print(hashed_pwd)
            # data['password']=hashed_pwd

            serializer = UserSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                print("Object saved")
                return JsonResponse(serializer.data,status=200)
            print("ju")
            return JsonResponse(serializer.errors, status=400)
        except User.DoesNotExist:
            return HttpResponse(status=404)
    # elif request.method == 'DELETE':
    #     User.delete()
    #     return HttpResponse(status=204)

class UserAPI(generics.RetrieveAPIView):
  permission_classes = [
    permissions.IsAuthenticated,
  ]
  serializer_class = UserSerializer

  def get_object(self):
     # return self.request.user
    users = User.objects.all()
    print(users)
    serializer = UserSerializer(users, many=True)
    print(serializer.data)
    return JsonResponse(serializer.data,safe=False) 