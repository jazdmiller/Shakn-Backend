from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [
    path('users/login', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('', views.getRoutes, name="routes"),
   
    path('products/', views.getProducts, name="products"),
    path('products/<int:pk>/', views.getProduct, name="product"),
    # path('products/', views.ProductList.as_view(), name='product_list '),
    # path('products/<int:pk>', views.ProductDetail.as_view(), name='product_detail'),
    # path('products/', views.product_list, name='product_list'),
    # path('products/<int:pk>', views.product_detail, name='product_detail'),
]