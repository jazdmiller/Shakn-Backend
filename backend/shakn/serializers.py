from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


    # reviews = serializers.HyperlinkedRelatedField(
    #     view_name='review_detail',
    #     many=True,
    #     read_only=True
    # )