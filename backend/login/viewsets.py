from rest_framework import viewsets
from .models import User, Message
from .serialaizer import UserSerializer, EmailSerializer
from django.conf import settings
from django.core.mail import send_mail
from rest_framework.views import APIView
from rest_framework.response import Response

class UserViewSet (viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class SendEmailView(APIView):
    queryset = Message.objects.all()
    serializer_class = EmailSerializer
    def post(self, request):
        subject = request.data.get('subject')
        message = request.data.get('message')
        recipient = request.data.get('recipient')
        
        send= send_mail(subject, message, settings.DEFAULT_FROM_EMAIL[recipient])
        send.send()
        return Response({'message': 'Correo enviado exitosamente'})
