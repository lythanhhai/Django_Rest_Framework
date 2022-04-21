from xml.dom.minidom import Document
from django.urls import re_path as url

# from django.conf.urls import url

from EmployeeApp import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns= [
    url("Department/", views.departmentApi),
    url("Department/<int:id>/", views.departmentApi),
    url("Employee/", views.EmployeeApi),
    url("Employee/<int:id>/", views.EmployeeApi),
    url("Employee/SaveFile/", views.saveFile)
] + static(settings.MEDIA_URL, document_root= settings.MEDIA_ROOT)