from django.db import models
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager
import datetime 
from phonenumber_field.modelfields import PhoneNumberField
from django.contrib.auth.models import PermissionsMixin
from com.models import school,code
# This will Manage our custom model
class UserManager(BaseUserManager):
    def create_user(self,userName,password,gender,birthdate,phone=None,email=None,loginID=None):
        try:
            user_obj=self.model(email=self.normalize_email(email))
            user_obj.set_password(password)
            print(user_obj.password)
            user_obj.userName=userName
            user_obj.gender=gender
            user_obj.birthdate=birthdate
            user_obj.phone=phone
            # if loginID:
            #     print(loginID)
            #     user_obj.loginID=loginID
            # else:
            #     print("no loginid")
            user_obj.loginID=loginID
            user_obj.is_staff=False
            user_obj.created_by=1
            user_obj.save(using=self._db)
            return user_obj
        except:
            return Exception("Can't save into database")

    # def create_superuser(self,email,password=None):
    #     user=self.model(email=self.normalize_email(email))
    #     user.set_password(password)
    #     user.userName=user.email
    #     user.loginID=user.email
    #     user.created_by=1
    #     print(str(user))
    #     user.is_staff=True
    #     user.save(using=self._db)
    #     return user


class User(AbstractBaseUser,PermissionsMixin):
    userName=models.CharField(max_length=50)
    gender=models.ForeignKey(code,on_delete=models.CASCADE)
    birthdate=models.DateField(max_length=90,default= datetime.date(1997, 11, 11),null=True )
    phone=PhoneNumberField(null=True,blank=True)
    email=models.CharField(max_length=255, unique=True,null=True)
    loginID=models.CharField(max_length=255,null=False,unique=True)
    is_staff=models.BooleanField(default=True)
    created_on=models.DateTimeField(auto_now_add=True)
    is_active=models.BooleanField(default=True)
    created_by=models.IntegerField()
    USERNAME_FIELD='loginID'
    #REQUIRED_FIELDS = (e.g) ['userName', 'email','password']
    objects=UserManager()
    def __str__(self):
        return '{username:'+self.userName+', password:'+str(self.password)+', loginID:'+str(self.loginID)+', gender:'+str(self.gender)+ ', birthdate:'+str(self.birthdate)+'}'
       

AUTH_USER_MODEL = User

class Role(models.Model):
    RoleID=models.AutoField(primary_key=True)
    RoleName=models.CharField(max_length=50,unique=True)
    RoleDescription=models.CharField(max_length=100)

class UserRole(models.Model):
    userRoleID=models.AutoField(primary_key=True)
    userID = models.ForeignKey(User, to_field='id',on_delete=models.CASCADE,db_column='userID')
    RoleID=models.ForeignKey(Role, to_field='RoleID',on_delete=models.CASCADE,db_column='RoleID')

class UserRoleLocation(models.Model):
    userRoleLocationID=models.AutoField(db_column='userRoleLocation',primary_key=True)
    userRoleID=models.ForeignKey(UserRole, to_field='userRoleID',on_delete=models.CASCADE,db_column='userRoleID')
    locationTypeCodeID=models.ForeignKey(code, db_column='locationTypeCodeID', to_field='codeID',on_delete=models.CASCADE)  # Field name made lowercase.
    locationObjectID = models.IntegerField(null=False)
    # TO BE CHECKED!!!!!!!locationObjectID