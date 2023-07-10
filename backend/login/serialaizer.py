from rest_framework import serializers
from .models import User

#consultas e instancias de la base de datos
class UserSerializer (serializers.ModelSerializer):  #permite editar usuarios
    class Meta:
        model = User
        fields = '__all__'
