from django.shortcuts import render
from rest_framework import viewsets
from .serializers import EntrySerializer
from .models import Entry

from datetime import datetime, timedelta

# Create your views here.

class EntryView(viewsets.ModelViewSet):
    serializer_class = EntrySerializer
    queryset = Entry.objects.filter( day__gte= datetime.today() - timedelta(days=14) ).filter(parent=None)
