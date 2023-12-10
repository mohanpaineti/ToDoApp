# todos/serializers.py
from rest_framework import serializers
from .models import Project, Task

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'

    # Convert choice field to string representation
    status = serializers.ChoiceField(choices=Task.STATUS_CHOICES)

    def create(self, validated_data):
        # Extract status from the validated data
        status = validated_data.pop('status', 'Todo')

        # Create the task with the remaining data
        task = Task.objects.create(**validated_data, status=status)
        return task
