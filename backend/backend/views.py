from rest_framework.views import APIView
from rest_framework.response import Response

class MyData(APIView):
    def get(self, request):
        data = {'message': 'Hola mundo!'}
        return Response(data)