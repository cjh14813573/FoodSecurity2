from rest_framework.decorators import api_view
from rest_framework.response import Response
from .utils import AuthenticationUtils
from .serializers import UserDetailSerializer

@api_view(['GET'])
def get_user_info(request):

    if request.method=='GET':
        user = AuthenticationUtils.getUser(request)
        serializer = UserDetailSerializer(user)

        print("here is fasdhncadfi")

        return Response(data=serializer.data)