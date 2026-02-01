from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8,style={'input_type': 'password'})
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']

    def create(self, validated_data):
        # user.objects.create = save the password in a plain text
        # user.objects.create_user = automatically hashes the password
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password']

        )
        # user = User.objects.create(**validated_data)
        return user