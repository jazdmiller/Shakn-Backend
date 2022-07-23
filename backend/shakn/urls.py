from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    
)

urlpatterns = [
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/register/', views.registerUser, name='register'),
    path('users/profile/', views.getUserProfile, name="users-profile"),
    path('users/', views.getUsers, name="users-"),
    path('products/', views.getProducts, name="products"),
    path('products/<int:pk>/', views.getProduct, name="product"),
    # path('products/', views.ProductList.as_view(), name='product_list '),
    # path('products/<int:pk>', views.ProductDetail.as_view(), name='product_detail'),
    # path('products/', views.product_list, name='product_list'),
    # path('products/<int:pk>', views.product_detail, name='product_detail'),
]