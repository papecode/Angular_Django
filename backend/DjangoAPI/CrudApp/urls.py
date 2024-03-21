from django.urls import path
from CrudApp import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('department/', views.departmentApi),
    path('department/<int:id>/', views.departmentApi),

    path('student/', views.studentApi),
    path('student/<int:id>/', views.studentApi),

    path('galerie/', views.SavePhoto),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
