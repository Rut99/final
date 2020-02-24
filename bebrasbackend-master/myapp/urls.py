from django.urls import path
from myapp import views
from django.urls import  include 
from .api import *
from knox import views as knox_views
urlpatterns = [
    # path('User/', views.User_list),
    # path('Register/', views.User_detail),
    path('api/auth/bulkregisterstudent',StudentBulkRegisterAPI.as_view()),
    path('', include('knox.urls')),
    path('api/auth/register', TeacherRegisterAPI.as_view()),
    path('api/auth/cmpnames', CompetitionNameAPI.as_view()),
    path('api/auth/teacherregister', TeacherRegistrationAPI.as_view()),
    path('api/auth/bulkregister', BulkRegisterAPI.as_view()),
    path('api/auth/student', StudentRegisterAPI.as_view()),
    path('api/auth/login', LoginAPI.as_view()),
    path('api/auth/user', UserViewAPI.as_view()),
    path('api/auth/country', CountryNameAPI.as_view()),
    path('api/auth/schoolname', SchoolNameAPI.as_view()),
    path('api/auth/schoolclasses', SchoolClassesAPI.as_view()),
    path('api/auth/state', StateNameAPI.as_view()),
    path('api/auth/district', DistrictNameAPI.as_view()),
    path('api/auth/school', SchoolRegisterAPI.as_view()),
    path('api/auth/userdetail', UserAPI.as_view()),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout')    

]