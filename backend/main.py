from fastapi import FastAPI, HTTPException
import httpx

app = FastAPI()
BASE_URL = "https://api.escuelajs.co/api/v1/products"

@app.get("/products")
async def get_products():
    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(BASE_URL)
            response.raise_for_status()
            return response.json()
    except httpx.HTTPStatusError as e:
        raise HTTPException(status_code=e.response.status_code, detail="Error fetching products")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/products/{product_id}")
async def get_product(product_id: int):
    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(f"{BASE_URL}/{product_id}")
            response.raise_for_status()
            return response.json()
    except httpx.HTTPStatusError as e:
        raise HTTPException(status_code=e.response.status_code, detail="Product not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
