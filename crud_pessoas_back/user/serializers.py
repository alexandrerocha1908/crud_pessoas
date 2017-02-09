from django.contrib.auth import get_user_model
from django.db.models import Q
from person.models import Person
from rest_framework.serializers import ModelSerializer, CharField, ValidationError
from rest_framework_jwt.settings import api_settings

jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

User = get_user_model()


class UserDetailSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class UserCreateSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = [
            'username',
            'password'
        ]

        extra_kwargs = {
            "password":
                {"write_only": True}
        }

    def create(self, validated_data):
        username = validated_data['username']
        password = validated_data['password']
        user_obj = User(
            username = username,
        )
        user_obj.set_password(password)
        user_obj.save()
        payload = jwt_payload_handler(user_obj)
        token = jwt_encode_handler(payload)
        validated_data['token'] = token
        return validated_data

class UserLoginSerializer(ModelSerializer):
    token = CharField(allow_blank=True, read_only=True)
    username = CharField(required=True)

    class Meta:
        model = User
        fields = [
            'username',
            'password',
            'token'
        ]

        extra_kwargs = {
            "password":
                {"write_only": True}
        }

    def validate(self, data):
        user_obj = None
        username = data.get("username", None)
        password = data["password"]

        user = User.objects.filter(
            Q(username=username)
        ).distinct()

        # if user.exists() and user.count()==1:
        #     user_obj = user.first()
        # else:
        #     raise ValidationError("This username is not valid.")

        # if user_obj:
        # 	if not user_obj.check_password(password):
        # 		raise ValidationError("Incorrect Login please try again")

        # data["token"] = "Some random token"
        # return data
        if user.exists() and user.count() == 1:
            user_obj = user.first()
            password_passes = user_obj.check_password(password)
        if not user_obj.is_active:
            raise ValidationError("This user is inactive")
        if password_passes:
            data['username'] = user_obj.username
            payload = jwt_payload_handler(user_obj)
            token = jwt_encode_handler(payload)
            data['token'] = token
            return data
        raise ValidationError("Invalid credentials")