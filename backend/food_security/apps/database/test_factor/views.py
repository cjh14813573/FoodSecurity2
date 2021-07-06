
from rest_framework.views import APIView

from .models import TestFactor
from rest_framework.response import Response

# from .serializers import SearchFactorSerializer
from .pagination import MyPageNumberPagination
from .serializers import FactorSerializer

def errorMessage(message):
    return {
        'error': message
    }

class SearchFactor(APIView):
    def get(self,request,*args,**kwargs):
        if 'idOfFoodCategory' not in request.query_params.keys() or request.query_params.get('idOfFoodCategory') == '':
            data = errorMessage('缺少食品分类参数')
            return Response(data=data)
        if 'keyWords' not in request.query_params.keys() or request.query_params.get('keyWords') == '':
            data = errorMessage('缺少风险因子关键字')
            return Response(data=data)
        if 'pageNo' not in request.query_params.keys() or request.query_params.get('pageNo') == '':
            data = errorMessage('缺少页码')
            return Response(data=data)
        idOfFoodCategory = request.query_params.get('idOfFoodCategory')
        keyWords = request.query_params.get('keyWords')
        pageNo = request.query_params.get('pageNo')
        page = MyPageNumberPagination()
        querySet = TestFactor.objects\
                .filter(food_category__id = idOfFoodCategory, chinese_name__contains=keyWords)\
                .order_by('id')

        page_set = page.paginate_queryset(queryset=querySet, request=request, view=self)
        serializer = FactorSerializer(querySet,many=True)
        return page.get_paginated_response(serializer.data)