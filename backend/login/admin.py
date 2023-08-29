from django.contrib import admin
from .models import User
from django.contrib.auth.models import Permission
# Para poder manejarlas desde el admin de django
admin.site.register(User)
admin.site.register(Permission)