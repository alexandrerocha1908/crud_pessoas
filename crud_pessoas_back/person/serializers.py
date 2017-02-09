from rest_framework.serializers import ModelSerializer, ReadOnlyField, CharField
from .models import Person
from user.serializers import UserDetailSerializer


class PersonSerializer(ModelSerializer):

	class Meta:
		model = Person
		fields = [
			'id',
			'name',
			'birth',
			'email',
			'address',
			'phone',
		]


