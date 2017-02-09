from django.conf.urls import url
from .views import PersonList, PersonDetail, PersonCreate


urlpatterns = [
    url(r'^persons$', PersonList.as_view()),
    url(r'^persons/(?P<pk>[0-9]+)$', PersonDetail.as_view()),
    url(r'^person/create$', PersonCreate.as_view())
]