from django.db import models
from django.contrib.auth.models import User

class Person(models.Model):
	name = models.CharField(max_length=20, null=False, blank=False)
	birth = models.DateField(max_length=20, null=False, blank=False)
	email = models.EmailField(max_length=50, null=False, blank=False)
	address = models.CharField(max_length=50, null=False, blank=False)
	phone = models.CharField(max_length=10, null=False, blank=False)

	class Meta:
		verbose_name = "Person"
		verbose_name_plural = "Persons"

	def __str__(self):
		return self.name