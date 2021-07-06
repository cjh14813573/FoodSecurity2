from rest_framework_simplejwt.authentication import JWTAuthentication

class AuthenticationUtils():

    @staticmethod
    def getUser(request):
        user,token = JWTAuthentication().authenticate(request)
        return user