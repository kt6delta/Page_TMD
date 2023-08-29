from typing import Any
from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager, PermissionsMixin

class UserManaguer(BaseUserManager):
    def create_user(self, username, email, password=None):
        if email is None:
            raise TypeError("El usuario debe tener un email")
        if username is None:
            raise TypeError("El usuario debe tener un nombre de usuario")
        user = self.model(
            email=self.normalize_email(email),
            username=username,
        )
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, username, email, password=None):
        if password is None:
            raise TypeError("El usuario debe tener una contraseña")
        user = self.create_user(
            email=email,
            username=username,
            password=password,
        )
        user.is_superuser = True
        user.is_staff = True
        user.save()
        return user

    def create_staffuser(self, username, email, password=None):
        if password is None:
            raise TypeError("El usuario debe tener una contraseña")
        user = self.create_user(
            email=email,
            username=username,
            password=password,
        )
        user.is_staff = True
        user.save()
        return user


class User(AbstractUser, PermissionsMixin):
    username = models.CharField(max_length=255, unique=True, db_index=True)
    email = models.EmailField(max_length=255, unique=True, db_index=True)
    image = models.ImageField(
        "Imagen de perfil", upload_to="perfil/", max_length=200, null=True, blank=True
    )
    verification_code = models.CharField(
        max_length=255, blank=True
    )  # comparar cuando haga click
    # para activar la cuenta correo
    is_verified = models.BooleanField(
        default=False, help_text="Si el correo fue veificado"
    )
    is_active = models.BooleanField(default=True, help_text="permite activar usuario")
    is_superuser = models.BooleanField(
        default=False,
        help_text="da todos los permisos sin tener que asignarlos explicitamente",
    )  # todos los permisos
    is_staff = models.BooleanField(
        default=False,
        help_text="da permisos de edicion sin tener que asignarlos explicitamente",
    )  # permisos de edicion
    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now=True)
    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["email, password, username"]
    objects = UserManaguer()

    def __str__(self):
        return self.email

    def tokens(self):
        return ""


# funcionalidad:
# login y registro => guardar de los usuarios y acceso con google
# chat, guardar registro
# enviar notificaciones con formulario de contactenos
# promocionar (google adds), (code), hosting


""" Imagen por user props: {
        is_activeProp: {
            type: Boolean,
            required: true,
        }
    },
         getIsActive() {
            axios.get('http://localhost:8000/login/', {
                params: {
                    is_active: this.is_active,
                    username: this.username,
                }
            })
                .then(res => {
                    const data = res.data;
                    for (const obj of data) {
                        if (obj.username === this.username) {
                            this.is_active = obj.is_active;
                            break;
                        }
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
"""
