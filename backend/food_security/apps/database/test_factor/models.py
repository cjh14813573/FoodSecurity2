from django.db import models

# Create your models here.
from apps.database.food_category.models import FourthCategory


class TestFactor(models.Model):
    food_category = models.ForeignKey(FourthCategory, on_delete=models.CASCADE,related_name='food_category')
    chinese_name = models.CharField(max_length=100)
    english_name = models.CharField(max_length=100)
    number = models.IntegerField(blank=True,null=True)
    classification = models.CharField(max_length=100)
    collectingChannel = models.CharField(max_length=100)
    source = models.CharField(max_length=200)
    cns = models.CharField(max_length=100)
    ins = models.CharField(max_length=100)
    cas = models.CharField(max_length=100)
    updateDate = models.DateTimeField(auto_now=True, verbose_name="更新时间")

    class Meta:
        managed = True
        verbose_name = "风险因子"
        verbose_name_plural = verbose_name