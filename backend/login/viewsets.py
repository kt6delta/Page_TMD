from rest_framework import viewsets
from .models import User
from .serialaizer import UserSerializer
from django.conf import settings
from django.core.mail import send_mail
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from rest_framework.response import Response
import random

class UserViewSet (viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


# SIn probar
def send_verification_code(request):
    user_id = request.data.get('user_id')

    user = get_object_or_404(User, id=user_id)
    # Función para generar el código de verificación
    verification_code = generate_verification_code()

    user.profile.verification_code = verification_code
    user.profile.save()

    subject = 'Código de verificación'
    message = f'Tu código de verificación es {verification_code}'

    send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, [user.email])

    return Response({'message': 'Correo enviado'})


def generate_verification_code():
    """Generates a random verification code."""
    return ''.join(random.choice('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ') for _ in range(50))
