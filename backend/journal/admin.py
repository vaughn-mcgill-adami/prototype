from django.contrib import admin
from .models import Entry

#from .my_config import my_fields_admi

# Register your models here.

class EntryAdmin(admin.ModelAdmin):
    pass

admin.site.register(Entry, EntryAdmin)