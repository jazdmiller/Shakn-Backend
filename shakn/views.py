from itertools import product
from django.shortcuts import render
from .models import Product, Review

# Create your views here.

def product_list(request):
    products = Product.objects.all()
    return render(request, 'shakn/product_list.html', {'products': products})