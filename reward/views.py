# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render,redirect
from django.http import HttpResponse, Http404,HttpResponseRedirect

# Create your views here.
def index(request):

   return render(request, 'index.html')



