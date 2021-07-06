from django.db import models

# Create your models here.

class TopCategory(models.Model):
    name = models.CharField(max_length=100)

    class Meta:
        managed = True
        verbose_name = "食品大类"
        verbose_name_plural = verbose_name


class SecondCategory(models.Model):
    parent = models.ForeignKey(TopCategory, on_delete=models.CASCADE,related_name='children')
    name = models.CharField(max_length=100)

    class Meta:
        managed = True
        verbose_name = "食品亚类"
        verbose_name_plural = verbose_name

class ThirdCategory(models.Model):
    parent = models.ForeignKey(SecondCategory, on_delete=models.CASCADE,related_name='children')
    name = models.CharField(max_length=100)

    class Meta:
        managed = True
        verbose_name = "食品次亚类"
        verbose_name_plural = verbose_name

class FourthCategory(models.Model):
    parent = models.ForeignKey(ThirdCategory, on_delete=models.CASCADE,related_name='children')
    name = models.CharField(max_length=100)

    class Meta:
        managed = True
        verbose_name = "食品细类"
        verbose_name_plural = verbose_name