from datetime import datetime

from time import timezone
from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=255, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    category = models.CharField(max_length=255, null=True, blank=True)
    _id = models.IntegerField(null=False, default=0, primary_key=True)

    
    

    def __str__(self):
        return self.name


class Review(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    product = models.ForeignKey(
                        Product,
                        on_delete=models.SET_NULL,
                        related_name= 'reviews',
                        related_query_name= 'review',
                        null=True
    )
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=255, null=True, blank=True)
   
   

    def __str__(self):
        return self.title


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    totalPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    

    def __str__(self):
        return self.createdAt


class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=255, null=True, blank=True)
    qty = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    image = models.CharField(max_length=255, null=True, blank=True)
    

    def __str__(self):
        return self.name

