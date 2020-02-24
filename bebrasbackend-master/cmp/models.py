from django.db import models
from com.models import *
from ques.models import *
from myapp.models import *
    # Create your models here.
class competition(models.Model):
        competitionID = models.AutoField(db_column='competitionID', primary_key=True)
        competitionName = models.CharField(max_length=50, null=False)
        competitionInfo = models.CharField(max_length=100, null=False)
        startDate = models.DateTimeField()
        endDate = models.DateTimeField()
        testDuration = models.TimeField()


class competitionAge(models.Model):
        competitionAgeID = models.AutoField(db_column='competitionAgeID', primary_key=True)
        schoolClassID = models.ForeignKey(schoolClass, db_column='schoolClassID', to_field='schoolClassID',on_delete=models.CASCADE)
        competitionID = models.ForeignKey(competition, db_column='competitionID', to_field='competitionID',on_delete=models.CASCADE)


class competitionQuestion(models.Model):
        competitionQuestionID = models.AutoField(db_column='competitionQuestionID', primary_key=True)
        competitionAgeID = models.ForeignKey(competitionAge, db_column='competitionAgeID', to_field='competitionAgeID',on_delete=models.CASCADE)
        questionID = models.ForeignKey(question, db_column='questionID', to_field='questionID', on_delete=models.CASCADE)
        questionLevelCodeID = models.ForeignKey(code, db_column='codeID', to_field='codeID', on_delete=models.CASCADE)


class competition_MarkScheme(models.Model):
        competition_MarkSchemeID = models.AutoField(db_column='competition_MarkSchemeID', primary_key=True)
        competitionAgeID = models.ForeignKey(competitionAge, db_column='competitionAgeID', to_field='competitionAgeID',on_delete=models.CASCADE)
        questionLevelCodeID = models.ForeignKey(code, db_column='codeID', to_field='codeID', on_delete=models.CASCADE)
        correctMarks = models.IntegerField(null=False)
        incorrectMarks = models.IntegerField(null=False)


class studentEnrollment(models.Model):
        studentEnrollmentID = models.AutoField(db_column='studentEnrollmentID', primary_key=True)
        competitionAgeID = models.ForeignKey(competitionAge, db_column='competitionAgeID', to_field='competitionAgeID',on_delete=models.CASCADE)
        languageCodeID = models.ForeignKey(code, db_column='languageCodeID', to_field='codeID', on_delete=models.CASCADE)
        timeTaken = models.TimeField(null=True) #changed komals model
        score = models.IntegerField(null=True)#changed komals model
        userID = models.ForeignKey(User, db_column='userID', to_field='id', on_delete=models.CASCADE)


class studentResponse(models.Model):
        studentResponseID = models.AutoField(db_column='studentResponseID', primary_key=True)
        competitionQuestionID = models.ForeignKey(competitionQuestion, to_field='competitionQuestionID',db_column='competitionQuestionID', on_delete=models.CASCADE)
        studentEnrollmentID = models.ForeignKey(studentEnrollment, to_field='studentEnrollmentID',db_column='studentEnrollmentID', on_delete=models.CASCADE)
        optionID = models.ForeignKey(option, to_field='optionID', db_column='option', on_delete=models.CASCADE)