from rest_framework import routers
from .viewsets import UserViewSet
from django.urls import path, include

router = routers.SimpleRouter()
router.register(r'', UserViewSet, basename='user')

urlpatterns = [
    path('', include(router.urls)),
    path('auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('verifica/', ),
]