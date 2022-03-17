"""backpart URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
from .views import test, startup, startupscheme, createwell, updatewell
from frontend.views import test_vue

urlpatterns = [
    path('test', test.as_view()),
    path('admin/', admin.site.urls),
    path('startup', startup.as_view()),
    path('startupscheme', startupscheme.as_view()),
    path('createwell', createwell.as_view()),
    path('updatewell',updatewell.as_view()),
    path('', test_vue)

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
