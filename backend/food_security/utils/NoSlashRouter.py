from rest_framework.routers import DefaultRouter

class NoSlashRouter(DefaultRouter):
    def __init__(self, trailing_slash='/?'):
        super(DefaultRouter,self).__init__()
        self.trailing_slash = trailing_slash
