from rest_framework import serializers
from CrudApp.models import Department, Student

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ('DepartmentId',
                  'DepartmentName')

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('StudentId',
                  'StudentName',
                  'Department',
                  'DateOfBirth',
                  'PhotoFileName')