from django.urls import re_path as url
# from django.conf.urls import url
from EmployeeApp import views

urlpatterns= [
    url("Department/", views.departmentApi),
    url("Department/<int:id>/", views.departmentApi),
    url("Employee/", views.EmployeeApi),
    url("Employee/<int:id>/", views.EmployeeApi)
]