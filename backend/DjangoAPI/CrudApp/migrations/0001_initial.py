# Generated by Django 5.0.3 on 2024-03-21 16:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Department',
            fields=[
                ('DepartmentId', models.AutoField(primary_key=True, serialize=False)),
                ('DepartmentName', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('StudentId', models.AutoField(primary_key=True, serialize=False)),
                ('StudentName', models.CharField(max_length=100)),
                ('Department', models.CharField(max_length=100)),
                ('DateOfBirth', models.DateField()),
                ('PhotoFileName', models.CharField(max_length=100)),
            ],
        ),
    ]
