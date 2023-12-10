# todos/models.py
from django.db import models

class Project(models.Model):
    name = models.CharField(max_length=255,unique=True)

class Task(models.Model):
    STATUS_CHOICES = [
        ('Todo', 'Todo'),
        ('Inprogress', 'Inprogress'),
        ('Inreview', 'Inreview'),
        ('Completed', 'Completed'),
    ]

    name = models.CharField(max_length=255)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    start_date = models.DateField()
    deadline = models.DateField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES)

    def __str__(self):
        return self.name
