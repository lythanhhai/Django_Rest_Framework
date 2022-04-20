from pkg_resources import empty_provider
from rest_framework import serializers
from EmployeeApp.models import Departments, Employee

class SerializerDepartment(serializers.ModelSerializer):
    class Meta:
        model = Departments
        fields = ('DepartmentId', 'DepartmentName')

class SerializerEmployee(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ("EmployeeId", "EmployeeName", 'Department', 'DateOfJoining', 'PhotoFileName')