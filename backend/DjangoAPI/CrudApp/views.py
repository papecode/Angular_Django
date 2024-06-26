from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt 
from rest_framework.parsers import JSONParser # JSONParser est une classe qui permet de convertir les données JSON en objets Python
from django.http.response import JsonResponse # JsonResponse est une classe qui permet de renvoyer des données JSON

from CrudApp.models import Department, Student
from CrudApp.serializers import DepartmentSerializer, StudentSerializer

from django.core.files.storage import default_storage

# Create your views here.
@csrf_exempt
def departmentApi(request, id=0):
    if request.method == 'GET':
        departments = Department.objects.all()
        departments_serializer = DepartmentSerializer(departments, many=True)
        return JsonResponse(departments_serializer.data, safe=False)

    elif request.method == 'POST':
        department_data = JSONParser().parse(request)
        department_serializer = DepartmentSerializer(data=department_data)
        if department_serializer.is_valid():
            department_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)

    elif request.method == 'PUT':
        department_data = JSONParser().parse(request)
        department = Department.objects.get(DepartmentId=department_data['DepartmentId'])
        department_serializer = DepartmentSerializer(department, data=department_data)
        if department_serializer.is_valid():
            department_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update")

    elif request.method == 'DELETE':
        department = Department.objects.get(DepartmentId=id)
        department.delete()
        return JsonResponse("Deleted Successfully", safe=False)

@csrf_exempt
def studentApi(request, id=0):
    if request.method == 'GET':
        students = Student.objects.all()
        students_serializer = StudentSerializer(students, many=True)
        return JsonResponse(students_serializer.data, safe=False)

    elif request.method == 'POST':
        student_data = JSONParser().parse(request)
        student_serializer = StudentSerializer(data=student_data)
        if student_serializer.is_valid():
            student_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)

    elif request.method == 'PUT':
        student_data = JSONParser().parse(request)
        student = Student.objects.get(StudentId=student_data['StudentId'])
        student_serializer = StudentSerializer(student, data=student_data)
        if student_serializer.is_valid():
            student_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update")

    elif request.method == 'DELETE':
        student = Student.objects.get(StudentId=id)
        student.delete()
        return JsonResponse("Deleted Successfully", safe=False)

@csrf_exempt
def SavePhoto(request):
    photo = request.FILES['uploadedPhoto']
    photo_name = default_storage.save(photo.name, photo)

    return JsonResponse(photo_name, safe=False)