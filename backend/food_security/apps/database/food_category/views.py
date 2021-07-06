from .serializers import \
    TopCategorySerializer,\
    SecondCategorySerializer,\
    ThirdCategorySerializer,\
    FourthCategorySerializer,\
    TreeSerializer
from .models import TopCategory, SecondCategory, ThirdCategory, FourthCategory
from rest_framework import viewsets
from rest_framework.response import Response

class TopCategoryViewSet(viewsets.ModelViewSet):
    serializer_class = TopCategorySerializer
    queryset = TopCategory.objects.all()

class SecondCategoryViewSet(viewsets.ModelViewSet):
    serializer_class = SecondCategorySerializer
    queryset = SecondCategory.objects.all()


    def list(self,request):
        if 'top' in request.query_params.keys():
            top_id = request.query_params.get('top')
            serializer = self.serializer_class(self.get_queryset().filter(parent__id = top_id),many=True)
            return Response(data = serializer.data)
        serializer = self.serializer_class(self.get_queryset(),many=True)
        return Response(data = serializer.data)

    '''
    def create(self,request):
        serializer = self.serializer_class(data = request.data)

        if serializer.is_valid():
            print(serializer.data)
            print(serializer.validated_data)
            print(serializer.errors)
        return Response(serializer.errors)
        '''

class ThirdCategoryViewSet(viewsets.ModelViewSet):
    serializer_class = ThirdCategorySerializer
    queryset = ThirdCategory.objects.all()


    def list(self,request):
        if 'second' in request.query_params.keys():
            second_id = request.query_params.get('second')
            serializer = self.serializer_class(self.get_queryset().filter(parent__id = second_id),many=True)
            return Response(data = serializer.data)
        serializer = self.serializer_class(self.get_queryset(),many=True)
        return Response(data = serializer.data)

class FourthCategoryViewSet(viewsets.ModelViewSet):
    serializer_class = FourthCategorySerializer
    queryset = FourthCategory.objects.all()


    def list(self,request):
        if 'third' in request.query_params.keys():
            third_id = request.query_params.get('third')
            serializer = self.serializer_class(self.get_queryset().filter(parent__id = third_id),many=True)
            return Response(data = serializer.data)
        serializer = self.serializer_class(self.get_queryset(),many=True)
        return Response(data = serializer.data)

class TreeViewSet(viewsets.ModelViewSet):
    serializer_class = TreeSerializer
    queryset = TopCategory.objects.all()
