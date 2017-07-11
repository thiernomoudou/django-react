from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.MenuList.as_view(), name="menu-list")
]