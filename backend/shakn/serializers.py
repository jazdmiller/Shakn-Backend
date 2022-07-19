from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.HyperlinkedModelSerializer):

    # reviews = serializers.HyperlinkedRelatedField(
    #     view_name='review_detail',
    #     many=True,
    #     read_only=True
    # )

    class Meta:
        model = Product
        fields = ('id', 'name', 'description', 'photo_url', 'price')