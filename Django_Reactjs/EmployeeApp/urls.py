from django.conf.urls import url
from django.urls import URLPattern
from EmployeeApp import views

URLPattern= [
    url("Department/", views.departmentApi),
    url("Department/<pk:id>/", views.departmentApi)
]