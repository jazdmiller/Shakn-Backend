from itertools import product
from django.shortcuts import render
from django.http import JsonResponse


from .models import Product, Review, Category

from rest_framework import generics
from .serializers import ProductSerializer
# Create your views here.

class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

def product_list(request):
    products = Product.objects.all().values('name', 'description', 'photo_url', 'price', 'category')
    products = list(products)
    print(products)
    return JsonResponse(products, safe=False)
    # return render(request, 'shakn/product_list.html', {'products': products})

def product_detail(request, pk):
    product = Product.objects.get(id=pk)
    category = Category.objects.all()
    return render(request, 'shakn/product_detail.html', {'product': product, 'category': category})