from app.database import product_collection
from app.schemas.product_schema import products_serializer, product_serializer


async def get_products():
    products = await product_collection.find().to_list(1000)
    return products_serializer(products)


async def create_product(product):
    result = await product_collection.insert_one(product)
    new_product = await product_collection.find_one({"_id": result.inserted_id})
    return product_serializer(new_product)