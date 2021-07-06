from django.urls import path
from .views import SearchFactor


urlpatterns = [
    path('', SearchFactor.as_view(), name='search_factor'),
]