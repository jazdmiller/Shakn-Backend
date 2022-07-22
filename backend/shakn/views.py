from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from .products import products
from .models import Product
from .serializers import ProductSerializer
from rest_framework import generics

# Create your views here.

# class ProductList(generics.ListCreateAPIView):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer

# class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer

@api_view(['GET'])
def getRoutes(request):
    return Response('Hello')

@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request, pk):
        product = Product.objects.get(_id=pk)
        serializer = ProductSerializer(product, many=False)
        return Response(serializer.data)

# def product_list(request):
#     products = Product.objects.all().values('name', 'description', 'photo_url', 'price', 'category')
#     products = list(products)
#     print(products)
#     return JsonResponse(products, safe=False)
    # return render(request, 'shakn/product_list.html', {'products': products})

# def product_detail(request, pk):
#     product = Product.objects.get(id=pk)
#     category = Category.objects.all()
#     return render(request, 'shakn/product_detail.html', {'product': product, 'category': category})