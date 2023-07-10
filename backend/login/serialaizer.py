from rest_framework import serializers
from .models import User, Message

#consultas e instancias de la base de datos
class UserSerializer (serializers.ModelSerializer):  #permite editar usuarios
    class Meta:
        model = User
        fields = '__all__'

class EmailSerializer(serializers.ModelSerializer): #permite editar correos?
    class Meta:
        model = Message
        fields = '__all__'