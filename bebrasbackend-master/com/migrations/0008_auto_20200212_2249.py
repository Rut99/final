# Generated by Django 2.2.7 on 2020-02-12 17:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('com', '0007_auto_20200211_2214'),
    ]

    operations = [
        migrations.AlterField(
            model_name='school',
            name='schoolName',
            field=models.CharField(db_column='schoolName', max_length=100, unique=True),
        ),
    ]