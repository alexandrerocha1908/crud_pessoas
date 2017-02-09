from django.conf.urls import url
from .views import UserCreate, UserLogin


urlpatterns = [
    url(r'^register$', UserCreate.as_view(), name='register'),
    url(r'^login$', UserLogin.as_view(), name='login')
]