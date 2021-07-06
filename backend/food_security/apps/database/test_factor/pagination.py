from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
import math

class MyPageNumberPagination(PageNumberPagination):
    page_size = 15  # default page size
    #page_size_query_param = 'size'  # ?page=xx&size=??
    #max_page_size = 10  # max page size
    page_query_param = 'pageNo'

    def get_paginated_response(self, data):
        return Response({
            'totalItems': data.__len__(),
            'totalPage': math.ceil(data.__len__()/self.page_size),
            'list': data
        })