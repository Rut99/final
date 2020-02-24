from django.db import models
import jsonfield
from com.models import *

class question(models.Model):
    questionID=models.AutoField(db_column='questionID',primary_key=True)
    countryID=models.ForeignKey(Countries,to_field='countryID',on_delete=models.CASCADE)
    domainCodeID=models.ForeignKey(code,related_name='domainCode',db_column='domainCodeID',to_field='codeID',on_delete=models.CASCADE)
    questionTypeCodeID=models.ForeignKey(code,related_name='questionTypeCode',db_column='questionTypeCodeID',to_field='codeID',on_delete=models.CASCADE)
    languageCodeID=models.ForeignKey(code,related_name='languageCode',db_column='languageCodeID',to_field='codeID',on_delete=models.CASCADE)
    ques_capt_bg_exp=jsonfield.JSONField()



class option(models.Model):
    optionID=models.AutoField(db_column='optionID',primary_key=True)
    caption_description=jsonfield.JSONField()
    questionID=models.ForeignKey(question,db_column='questionID',to_field='questionID',on_delete=models.CASCADE)
    #displayOrder?

class questionTranslation(models.Model):
    questionTranslationID=models.AutoField(db_column='questionTranslationID',primary_key=True)
    questionID=models.ForeignKey(question,db_column='questionID',to_field='questionID',on_delete=models.CASCADE)
    languageCodeID=models.ForeignKey(code,db_column='languageCodeID',to_field='codeID',on_delete=models.CASCADE)
    translation=jsonfield.JSONField()

class optionTranslation(models.Model):
    optionTranslationID=models.AutoField(db_column='optionTranslationID',primary_key=True)
    optionID=models.ForeignKey(option,db_column='optionID',to_field='optionID',on_delete=models.CASCADE)
    languageCodeID=models.ForeignKey(code,db_column='languageCodeID',to_field='codeID',on_delete=models.CASCADE)
    translation=jsonfield.JSONField()

class correctOption(models.Model):
    correctOptionID=models.AutoField(db_column='correctOptionID',primary_key=True)
    questionID=models.ForeignKey(question,db_column='questionID',on_delete=models.CASCADE,to_field='questionID')
    optionID=models.ForeignKey(option,db_column='optionID',to_field='optionID',on_delete=models.CASCADE)
    #ansText required or not? coz if only MCQs then no need of this
