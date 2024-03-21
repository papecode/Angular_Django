from django.db import models

# Create your models here.

class Department(models.Model):
    DepartmentId = models.AutoField(primary_key=True)
    DepartmentName = models.CharField(max_length=100)

class Student(models.Model):
    StudentId = models.AutoField(primary_key=True)
    StudentName = models.CharField(max_length=100)
    Department = models.CharField(max_length=100)
    DateOfBirth = models.DateField()
    PhotoFileName = models.CharField(max_length=100)