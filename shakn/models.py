from django.db import models
# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=555)
    photo_url = models.TextField()
    price = models.FloatField()
    category = models.ManyToManyField(Category, related_name='products')

    def __str__(self):
        return self.name


class Review(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    product = models.ForeignKey(
                        Product,
                        on_delete=models.CASCADE,
                        related_name= 'reviews',
                        related_query_name= 'review'
    )

    def __str__(self):
        return self.title