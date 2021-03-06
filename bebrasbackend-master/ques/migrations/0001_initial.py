# Generated by Django 2.2.7 on 2020-02-13 06:15

from django.db import migrations, models
import django.db.models.deletion
import jsonfield.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('com', '0008_auto_20200212_2249'),
    ]

    operations = [
        migrations.CreateModel(
            name='option',
            fields=[
                ('optionID', models.AutoField(db_column='optionID', primary_key=True, serialize=False)),
                ('caption_description', jsonfield.fields.JSONField()),
            ],
        ),
        migrations.CreateModel(
            name='question',
            fields=[
                ('questionID', models.AutoField(db_column='questionID', primary_key=True, serialize=False)),
                ('ques_capt_bg_exp', jsonfield.fields.JSONField()),
                ('countryID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='com.Countries')),
                ('domainCodeID', models.ForeignKey(db_column='domainCodeID', on_delete=django.db.models.deletion.CASCADE, related_name='domainCode', to='com.code')),
                ('languageCodeID', models.ForeignKey(db_column='languageCodeID', on_delete=django.db.models.deletion.CASCADE, related_name='languageCode', to='com.code')),
                ('questionTypeCodeID', models.ForeignKey(db_column='questionTypeCodeID', on_delete=django.db.models.deletion.CASCADE, related_name='questionTypeCode', to='com.code')),
            ],
        ),
        migrations.CreateModel(
            name='questionTranslation',
            fields=[
                ('questionTranslationID', models.AutoField(db_column='questionTranslationID', primary_key=True, serialize=False)),
                ('translation', jsonfield.fields.JSONField()),
                ('languageCodeID', models.ForeignKey(db_column='languageCodeID', on_delete=django.db.models.deletion.CASCADE, to='com.code')),
                ('questionID', models.ForeignKey(db_column='questionID', on_delete=django.db.models.deletion.CASCADE, to='ques.question')),
            ],
        ),
        migrations.CreateModel(
            name='optionTranslation',
            fields=[
                ('optionTranslationID', models.AutoField(db_column='optionTranslationID', primary_key=True, serialize=False)),
                ('translation', jsonfield.fields.JSONField()),
                ('languageCodeID', models.ForeignKey(db_column='languageCodeID', on_delete=django.db.models.deletion.CASCADE, to='com.code')),
                ('optionID', models.ForeignKey(db_column='optionID', on_delete=django.db.models.deletion.CASCADE, to='ques.option')),
            ],
        ),
        migrations.AddField(
            model_name='option',
            name='questionID',
            field=models.ForeignKey(db_column='questionID', on_delete=django.db.models.deletion.CASCADE, to='ques.question'),
        ),
        migrations.CreateModel(
            name='correctOption',
            fields=[
                ('correctOptionID', models.AutoField(db_column='correctOptionID', primary_key=True, serialize=False)),
                ('optionID', models.ForeignKey(db_column='optionID', on_delete=django.db.models.deletion.CASCADE, to='ques.option')),
                ('questionID', models.ForeignKey(db_column='questionID', on_delete=django.db.models.deletion.CASCADE, to='ques.question')),
            ],
        ),
    ]
