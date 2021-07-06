from rest_framework import serializers
from apps.database.test_factor.models import TestFactor

class SearchFactorSerializer(serializers.Serializer):
    idOfFoodCategory = serializers.IntegerField()
    keyWords = serializers.CharField(required=True, allow_blank=True, max_length=100)
    pageNo = serializers.IntegerField()

class FactorSerializer(serializers.ModelSerializer):
    idOfFoodCategory = serializers.IntegerField(source="food_category_id")
    chineseName = serializers.CharField(source="chinese_name")
    englishName = serializers.CharField(source="english_name")
    class Meta:
        model = TestFactor
        fields = ('id', 'idOfFoodCategory', 'chineseName','englishName', 'number','classification','collectingChannel','source','cns','ins','cas','updateDate')

