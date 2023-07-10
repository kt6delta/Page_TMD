from rest_framework import viewsets
from .models import User
from .serialaizer import UserSerializer
from django.conf import settings
from django.core.mail import send_mail
from django.http import JsonResponse
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication,SessionAuthentication





class UserViewSet (viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

@api_view(['POST'])
@authentication_classes([TokenAuthentication]) #autorizacion por token
@permission_classes([IsAuthenticated]) 
#@authentication_classes([SessionAuthentication]) #autorizacion por sesion
def send_email(request):
    if request.method == 'POST':
        subject = request.POST.get('subject')
        message = request.POST.get('message')
        recipient = request.POST.get('recipient')
        send_mail(
            subject,
            message,
            'datapreciado08@gmail.com',
            [recipient],
            fail_silently=False,
        )
        return JsonResponse({'mensaje': 'Correo enviado correctamente'})
    else:
        return JsonResponse({'mensaje': 'Error al enviar el correo'})
