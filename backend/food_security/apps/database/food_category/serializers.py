from rest_framework import serializers
from .models import TopCategory,SecondCategory,ThirdCategory,FourthCategory



class TopCategorySerializer(serializers.ModelSerializer):
    #children = SecondCategorySerializer(many=True)
    class Meta:
        model = TopCategory
        fields = ('id','name')


class SecondCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SecondCategory
        fields = ('id', 'name','parent')

class ThirdCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ThirdCategory
        fields = ('id', 'name', 'parent')

class FourthCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = FourthCategory
        fields = ('id', 'name', 'parent')

class ThirdTreeSerializer(serializers.ModelSerializer):
    children = FourthCategorySerializer(many=True)
    class Meta:
        model = TopCategory
        fields = ('id', 'name', 'children')

class SecondTreeSerializer(serializers.ModelSerializer):
    children = ThirdTreeSerializer(many=True)
    class Meta:
        model = TopCategory
        fields = ('id', 'name', 'children')

class TopTreeSerializer(serializers.ModelSerializer):
    children = SecondTreeSerializer(many=True)
    class Meta:
        model = TopCategory
        fields = ('id', 'name', 'children')

class TreeSerializer(TopTreeSerializer):
    pass