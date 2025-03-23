from fastapi import FastAPI
from products import get_all_products, get_product_by_id
from scraper import scrape_product

app = FastAPI()

@app.get("/products")
async def get_products():
    return await get_all_products()

@app.get("/products/{product_id}")
async def get_product(product_id: int):
    return await get_product_by_id(product_id)

@app.get("/scrape/")
async def scrape_product_info(url: str):
    return await scrape_product(url)
