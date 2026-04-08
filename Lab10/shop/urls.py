from django.contrib import admin
from django.urls import path
from api.views import *

urlpatterns = [
    path('admin/', admin.site.urls),

   path('api/products/', ProductListAPIView.as_view()),
    path('api/products/<int:product_id>/', ProductDetailAPIView.as_view()),

    path('api/categories/', CategoryListAPIView.as_view()),
    path('api/categories/<int:category_id>/', CategoryDetailAPIView.as_view()),
    path('api/categories/<int:category_id>/products/', CategoryProductsAPIView.as_view()),
]