from fastapi import FastAPI
from products import get_all_products, get_product_by_id

app = FastAPI()

@app.get("/products")
async def get_products():
    return await get_all_products()

@app.get("/products/{product_id}")
async def get_product(product_id: int):
    return await get_product_by_id(product_id)
