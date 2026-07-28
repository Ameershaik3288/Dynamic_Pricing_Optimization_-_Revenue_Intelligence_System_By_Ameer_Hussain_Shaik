from fastapi import APIRouter
from app.models.product import Product
from app.services.product_service import get_products, create_product

router = APIRouter()


@router.get("/")
async def fetch_products():
    return await get_products()


@router.post("/")
async def add_product(product: Product):
    return await create_product(product.model_dump())