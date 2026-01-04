from django.urls import path
from .views import HelloWorld, home

urlpatterns = [
    path('', home, name='home'), 
    path('api/hello/', HelloWorld.as_view(), name='hello-world'),
]