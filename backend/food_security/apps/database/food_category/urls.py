from django.urls import path,include
from rest_framework.routers import DefaultRouter
from utils.NoSlashRouter import NoSlashRouter
from .views import TopCategoryViewSet,\
    SecondCategoryViewSet,\
    ThirdCategoryViewSet,\
    FourthCategoryViewSet,\
    TreeViewSet


router = NoSlashRouter()
router.register(prefix='top', viewset=TopCategoryViewSet, basename='top')
router.register(prefix='second', viewset=SecondCategoryViewSet, basename='second')
router.register(prefix='third', viewset=ThirdCategoryViewSet, basename='third')
router.register(prefix='fourth', viewset=FourthCategoryViewSet, basename='fourth')
router.register(prefix='tree', viewset=TreeViewSet, basename='tree')

urlpatterns = [
    path('', include(router.urls))
]