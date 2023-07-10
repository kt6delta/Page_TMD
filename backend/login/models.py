from django.db import models
from django.contrib.auth.models import AbstractUser

class User(models.Model):
    username = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=50)
    email = models.EmailField(max_length=50, unique=True)
    verification_code = models.CharField(max_length=50, blank=True) #comprar cuando haga click
    is_active = models.BooleanField(default=False) #para activar la cuenta correo
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now=True)
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']
    def __str__(self):
        return self.username


#funcionalidad:
#login y registro => guardar de los usuarios y acceso con google
#chat, guardar registro
# enviar notificaciones con formulario de contactenos
#promocionar (google adds), (code), hosting



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