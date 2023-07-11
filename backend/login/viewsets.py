from rest_framework import viewsets
from .models import User
from .serialaizer import UserSerializer
from django.conf import settings
from django.core.mail import send_mail
from django.http import JsonResponse
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import BasicAuthentication
import json


class UserViewSet (viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


@api_view(['POST'])
@authentication_classes([BasicAuthentication])
@permission_classes([IsAuthenticated])
def send_email(request):
    content = {
        'user': str(request.user),
        'auth': str(request.auth),
    }
    if request.method == 'POST':
        data = json.loads(request.body)
        subject = data.get('subject')
        message = data.get('message')
        destino = data.get('destino')
        from_email= settings.EMAIL_HOST_USER
        send_mail(  # error al enviar el correo
            subject,
            message,
            from_email,
            [destino],
            fail_silently=False
        )
        return JsonResponse({'mensaje': 'Correo enviado correctamente'})
    else:
        return JsonResponse({'mensaje': 'Error al enviar el correo'})
