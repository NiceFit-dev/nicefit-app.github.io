import httpx
from fastapi import HTTPException

BASE_URL = "https://api.escuelajs.co/api/v1/products"

async def get_all_products():
    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(BASE_URL)
            response.raise_for_status()
            return response.json()
    except httpx.HTTPStatusError as e:
        raise HTTPException(status_code=e.response.status_code, detail="Error fetching products")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

async def get_product_by_id(product_id: int):
    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(f"{BASE_URL}/{product_id}")
            response.raise_for_status()
            return response.json()
    except httpx.HTTPStatusError as e:
        raise HTTPException(status_code=e.response.status_code, detail="Product not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
