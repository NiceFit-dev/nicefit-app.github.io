import React, {useState} from "react";
import M_Jacket_1 from "../assets/Ropa_Armario/Jacket/Man/M_Jacket_1.jpg"
import M_Jacket_2 from "../assets/Ropa_Armario/Jacket/Man/M_Jacket_2.jpg"
import M_Jacket_3 from "../assets/Ropa_Armario/Jacket/Man/M_Jacket_3.jpg"
import W_Jacket_1 from "../assets/Ropa_Armario/Jacket/Woman/W_Jacket_1.jpg"
import W_Jacket_2 from "../assets/Ropa_Armario/Jacket/Woman/W_Jacket_2.jpg"
import W_Jacket_3 from "../assets/Ropa_Armario/Jacket/Woman/W_Jacket_3.jpg"
import M_Jeans_1 from "../assets/Ropa_Armario/Jeans/Man/M_Jeans_1.jpg"
import M_Jeans_2 from "../assets/Ropa_Armario/Jeans/Man/M_Jeans_2.jpg"
import M_Jeans_3 from "../assets/Ropa_Armario/Jeans/Man/M_Jeans_3.jpg"
import W_Jeans_1 from "../assets/Ropa_Armario/Jeans/Woman/W_Jeans_1.jpg"
import W_Jeans_2 from "../assets/Ropa_Armario/Jeans/Woman/W_Jeans_2.jpg"
import W_Jeans_3 from "../assets/Ropa_Armario/Jeans/Woman/W_Jeans_3.jpg"
import M_Shirt_1 from "../assets/Ropa_Armario/Shirts/Man/M_Shirt_1.jpg"
import M_Shirt_2 from "../assets/Ropa_Armario/Shirts/Man/M_Shirt_2.jpg"
import M_Shirt_3 from "../assets/Ropa_Armario/Shirts/Man/M_Shirt_3.jpg"
import W_Shirt_1 from "../assets/Ropa_Armario/Shirts/Woman/W_Shirt_1.jpg"
import W_Shirt_2 from "../assets/Ropa_Armario/Shirts/Woman/W_Shirt_2.jpg"
import W_Shirt_3 from "../assets/Ropa_Armario/Shirts/Woman/W_Shirt_3.jpg"
import M_Shoes_1 from "../assets/Ropa_Armario/Shoes/Man/M_Shoes_1.jpg"
import M_Shoes_2 from "../assets/Ropa_Armario/Shoes/Man/M_Shoes_2.jpg"
import M_Shoes_3 from "../assets/Ropa_Armario/Shoes/Man/M_Shoes_3.jpg"
import W_Shoes_1 from "../assets/Ropa_Armario/Shoes/Woman/W_Shoes_1.jpg"
import W_Shoes_2 from "../assets/Ropa_Armario/Shoes/Woman/W_Shoes_2.jpg"
import W_Shoes_3 from "../assets/Ropa_Armario/Shoes/Woman/W_Shoes_3.jpg"

      
//Creando la lista de imágenes

export const datageneral = [{
    id: 1, 
    name: "AG Jacket",
    category: "Jacket",
    price: "CLP 39.990",
    size: "L",
    url: M_Jacket_1
    
}, {
    id: 2,
    name: "FGT Navy Jacket",
    category: "Jacket",
    price: "CLP 49.990",
    size: "XL",
    url: M_Jacket_2
}, {
    id: 3, 
    name: "BR Jacket",
    category: "Jacket",
    price: "CLP 85.990",
    size: "M",
    url: M_Jacket_3
},
{
    id: 4,
    name: " B Blazer",
    category: "Jacket",
    price: "CLP 109.990",
    size: "L",
    url: W_Jacket_1

},{
    id: 5, 
    name: "Pink Jacket",
    category: "Jacket",
    price: "CLP 41.990",
    size: "S",
    url: W_Jacket_2
}, {
    id:6,
    name: "Ast Jacket",
    category: "Jacket",
    price: "CLP 58.990",
    size: "L",
    url: W_Jacket_3
}, {
    id: 7,
    name: "Casual Jeans",
    category: "Jeans",
    price: "CLP 35.990",
    size: "36",
    url: M_Jeans_1
}, {
    id: 8,
    name: "Navy Jeans",
    category: "Jeans",
    price: "CLP 41.990",
    size: "38",
    url: M_Jeans_2
},{ 
    id: 9,
    name: "Daily Jeans", 
    category: "Jeans",
    price: "CLP 45.990",
    size: "38",
    url: M_Jeans_3
}, {
    id: 10,
    name: "Blue Jeans",
    category: "Jeans",
    price: "CLP 47.990",
    size: "40",
    url: W_Jeans_1
}, {id: 11,
    name: "Soft Jeans",
    category: "Jeans",
    price: "CLP 58.990",
    size: "34",
    url: W_Jeans_2
}, {
    id: 12,
    name: "Black Jeans",
    category: "Jeans",
    price: "CLP 47.990",
    size: "38",
    url: W_Jeans_3
}, {
    id: 13, 
    name: "Ready Boots",
    category: "Shoes",
    price: "CLP 65.990",
    size: "41",
    url: M_Shoes_1
}, {
    id: 14, 
    name: "Dress Shoes",
    category: "Shoes",
    price: "CLP 89.990",
    size: "40",
    url: M_Shoes_2
}, {
    id: 15,
    name: "Leather Dress Shoes",
    category: "Shoes",
    price: "CLP 50.990",
    size: "41",
    url: M_Shoes_3
}, {
    id: 16,
    name: "Md Boots",
    category: "Shoes", 
    price: "CLP 74.990",
    size: "38",
    url: W_Shoes_1
}, {
    id: 17,
    name: "Casual Sneaker",
    category: "Shoes",
    price: "CLP 40.990",
    size: "35",
    url: W_Shoes_2
}, {
    id: 18,
    name: "Red Casual Sneaker",
    category: "Shoes",
    price: "CLP 54.990",
    size: "36",
    url: W_Shoes_3
}, {
    id: 19, 
    name: "Green Shirt",
    category: "Shirt",
    price: "CLP 65.990",
    size: "L",
    url: M_Shirt_1
}, {
    id: 20, 
    name: "Red Shirt",
    category: "Shirt",
    price: "CLP 74.990",
    size: "L",
    url: M_Shirt_2
}, {
    id: 21, 
    name: "Real Shirt",
    category: "Shirt",
    price: "CLP 99.990",
    size: "L",
    url: M_Shirt_3
}, {
    id: 22, 
    name: "AZR Shirt", 
    category: "Shirt",
    price: "CLP 54.990",
    size: "S", 
    url: W_Shirt_1
}, {
    id: 23,
    name: "White Shirt", 
    category: "Shirt", 
    price: "CLP 74.990",
    size: "L",
    url: W_Shirt_2
}, {
    id: 24, 
    name: "Pink Shirt", 
    category: "Shirt",
    price: "CLP 65.990",
    size: "M",
    url: W_Shirt_3
}];

//Hacer un ciclo para la importación de todas las imágenes que se encuentran en la carpeta de Ropa Armario//

//<img src={M_Jacket_1}/> //