from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.

class Entry(models.Model):
    name = models.CharField(max_length=32, blank=True)
    
    day = models.DateField(blank=True, null=True)
    time = models.TimeField(blank=True, null=True)
    
    amount = models.DecimalField(decimal_places=3, max_digits=12, blank=True)
    unit = models.CharField(max_length=16, blank=True)

    parent = models.ForeignKey('self', blank=True, null=True, verbose_name='parent', related_name='children', on_delete=models.CASCADE)