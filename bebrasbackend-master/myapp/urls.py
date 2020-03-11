from django.urls import path
from myapp import views
from django.urls import  include 
from .api import *
from knox import views as knox_views

from django.contrib.auth import views as auth_views 

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
    path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout'),
    path('api/auth/ResetPasswordView', ResetPasswordView.as_view()),
    path('api/auth/ConfirmResetPasswordView', ConfirmResetPasswordView.as_view()),
    path('api/auth/ContactUsMail', ContactUsMailApi.as_view()),

    # path('api/auth/ChangePasswordView', ChangePasswordView.as_view()),
    # path('^password_reset/$', auth_views.password_reset, name='password_reset'),
    # path('^password_reset/done/$', auth_views.password_reset_done, name='password_reset_done'),
    # path('^reset/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
    #     auth_views.password_reset_confirm, name='password_reset_confirm'),
    # path('^reset/done/$', auth_views.password_reset_complete, name='password_reset_complete')
]