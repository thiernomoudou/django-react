# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import generics

from django.shortcuts import render

from .models import Menu
from .serializers import MenuSerializer

# Create your views here.


class MenuList(generics.ListCreateAPIView):
    """
    API endpoint for listing and creating the menu
    """
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer