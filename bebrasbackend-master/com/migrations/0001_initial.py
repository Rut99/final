# Generated by Django 2.2.7 on 2020-01-24 13:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Countries',
            fields=[
                ('countryID', models.AutoField(primary_key=True, serialize=False)),
                ('iso', models.CharField(max_length=2)),
                ('name', models.CharField(max_length=80)),
                ('nicename', models.CharField(max_length=80)),
                ('iso3', models.CharField(blank=True, max_length=3, null=True)),
                ('numcode', models.SmallIntegerField(blank=True, null=True)),
                ('phonecode', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='States',
            fields=[
                ('stateID', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('countryID', models.ForeignKey(db_column='countryID', on_delete=django.db.models.deletion.CASCADE, to='com.Countries')),
            ],
        ),
        migrations.CreateModel(
            name='Districts',
            fields=[
                ('districtID', models.AutoField(primary_key=True, serialize=False)),
                ('stateID', models.ForeignKey(db_column='stateID', on_delete=django.db.models.deletion.CASCADE, to='com.States')),
                ('name', models.CharField(blank=True, max_length=100, null=True)),
            ],
        ),
    ]
