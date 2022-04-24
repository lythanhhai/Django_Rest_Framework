from django.urls import re_path

# from django.conf.urls import url

from EmployeeApp import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    re_path("Department/", views.departmentApi),
    re_path("Department/<int:id>/", views.departmentApi),
    re_path("Employee/", views.EmployeeApi),
    re_path("Employee/<int:id>/", views.EmployeeApi),
    re_path("Employee/SaveFile/", views.saveFile)
] + static(settings.MEDIA_URL, document_root= settings.MEDIA_ROOT)