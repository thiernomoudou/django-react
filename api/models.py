# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models

# Create your models here.
class Menu(models.Model):
    name = models.CharField(max_length = 50)
    description = models.CharField(max_length = 200)
    price =  models.IntegerField()

    def str(self):
        return (self.name)