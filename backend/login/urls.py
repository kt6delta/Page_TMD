from rest_framework import routers
from .viewsets import UserViewSet, SendEmailView
from django.urls import path, include

router = routers.SimpleRouter()
router.register(r'', UserViewSet, basename='user')
# router.register(r'groups', views.GroupViewSet)

urlpatterns = [
    path('users', include(router.urls)),
    path('send-email/', SendEmailView.as_view(), name='send-email')
]
