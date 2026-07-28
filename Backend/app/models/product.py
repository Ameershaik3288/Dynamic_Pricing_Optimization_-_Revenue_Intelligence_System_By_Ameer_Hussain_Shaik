from pydantic import BaseModel, Field
from typing import Optional
from uuid import uuid4


class Product(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid4()))
    name: str
    category: str
    cost_price: float
    selling_price: float
    stock: int
    demand: int
    competitor_price: float
    recommended_price: Optional[float] = None