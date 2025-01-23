from .models import Entry
from rest_framework import serializers

from .my_config import child_fields, parent_fields

class LeafEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entry
        fields = '__all__'

class EntrySerializer(serializers.ModelSerializer):
    children = LeafEntrySerializer(many=True, read_only=True)

    class Meta:
        model = Entry
        fields = parent_fields
        """
        extra_kwargs = {
            "children": {
                "read_only": False,
                "required": True,
            },
        }
        """