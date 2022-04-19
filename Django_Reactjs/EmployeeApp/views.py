from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from EmployeeApp.models import Departments, Employee
from EmployeeApp.serializers import SerializerDepartment, SerializerEmployee

# Create your views here.
@csrf_exempt
def departmentApi(request, id = 0):
    if request.method == "GET":
        departments = Departments.objects.all()
        departments_serializer = SerializerDepartment(departments, many= True)
        return JsonResponse(departments_serializer, safe=False)
    elif request.method == "POST":
        department_data = JSONParser().parse(request)
        department_serializer = SerializerDepartment(data= department_data)
        if department_serializer.is_valid():
            department_serializer.save()
            return JsonResponse("Post is successful", safe= False)
        else:
            return JsonResponse("Post is unsuccessful", safe= False)
    elif request.method == "PUT":
        department_data = JSONParser().parse(request)
        department = Departments.objects.get(DepartmentsId = department_data["DepartmentsId"])
        department_serializer = SerializerDepartment(department, data= department_data)

