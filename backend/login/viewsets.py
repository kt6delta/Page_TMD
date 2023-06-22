from rest_framework import viewsets
from .models import User
from .serialaizer import UserSerializer

class UserViewSet (viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
