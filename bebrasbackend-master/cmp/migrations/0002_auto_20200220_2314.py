# Generated by Django 2.2.7 on 2020-02-20 17:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cmp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='studentenrollment',
            name='languageCodeID',
            field=models.ForeignKey(db_column='languageCodeID', on_delete=django.db.models.deletion.CASCADE, to='com.code'),
        ),
    ]
