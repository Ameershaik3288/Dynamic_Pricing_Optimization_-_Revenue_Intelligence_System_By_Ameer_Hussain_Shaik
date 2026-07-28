def product_serializer(product) -> dict:
    return {
        "id": str(product["_id"]),
        "name": product["name"],
        "category": product["category"],
        "cost_price": product["cost_price"],
        "selling_price": product["selling_price"],
        "stock": product["stock"],
        "demand": product["demand"],
        "competitor_price": product["competitor_price"],
        "recommended_price": product.get("recommended_price"),
    }


def products_serializer(products):
    return [product_serializer(product) for product in products]