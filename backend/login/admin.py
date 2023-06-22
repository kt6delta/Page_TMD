from django.contrib import admin
from .models import User
# Para poder manejarlas desde el admin de django
admin.site.register(User)
