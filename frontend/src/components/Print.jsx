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
    id:0, 
    name: "MJacket1",
    category: "Jacket",
    url: M_Jacket_1
    
}, {
    id: 1,
    name: "MJacket2",
    category: "Jacket",
    url: M_Jacket_2
}, {
    id: 3, 
    name: "MJacket3",
    category: "Jacket",
    url: M_Jacket_3
},
{
    id: 4,
    name: "WJacket1",
    category: "Jacket",
    url: W_Jacket_1

},{
    id: 5, 
    name: "WJacket2",
    category: "Jacket",
    url: W_Jacket_2
}, {
    id:6,
    name: "WJacket3",
    category: "Jacket",
    url: W_Jacket_3
}, {
    id: 7,
    name: "MJeans1",
    category: "Jeans",
    url: M_Jeans_1
}, {
    id: 8,
    name: "MJeans2",
    category: "Jeans",
    url: M_Jeans_2
},{ 
    id: 9,
    name: "MJens3", 
    category: "Jeans",
    url: M_Jeans_3
}, {
    id: 10,
    name: "WJeans1",
    category: "Jeans",
    url: W_Jeans_1
}, {id: 11,
    name: "WJeans2",
    category: "Jeans",
    url: W_Jeans_2
}, {
    id: 12,
    name: "WJeans3",
    category: "Jeans",
    url: W_Jeans_3
}, {
    id: 13, 
    name: "MShoes1",
    category: "Shoes",
    url: M_Shoes_1
}, {
    id: 14, 
    name: "MShoes2",
    category: "Shoes",
    url: M_Shoes_2
}, {
    id: 15,
    name: "MShoes3",
    category: "Shoes",
    url: M_Shoes_3
}, {
    id: 16,
    name: "WShoes1",
    category: "Shoes", 
    url: W_Shoes_1
}, {
    id: 17,
    name: "WShoes2",
    category: "Shoes",
    url: W_Shoes_2
}, {
    id: 18,
    name: "WShoes3",
    caetgory: "Shoes",
    url: W_Shoes_3
}, {
    id: 14, 
    name: "MShirt1",
    category: "Shirt",
    url: M_Shirt_1
}, {
    id: 15, 
    name: "MShirt2",
    category: "Shirt",
    url: M_Shirt_2
}, {
    id: 16, 
    name: "MShirt3",
    category: "Shirt",
    url: M_Shirt_3
}, {
    id: 17, 
    name: "WShirt1", 
    category: "Shirt", 
    url: W_Shirt_1
}, {
    id: 18,
    name: "WShirt2", 
    category: "Shirt", 
    url: W_Shirt_2
}, {
    id: 19, 
    name: "WShirt3", 
    category: "Shirt",
    url: W_Shirt_3
}];

//Hacer un ciclo para la importación de todas las imágenes que se encuentran en la carpeta de Ropa Armario//

//<img src={M_Jacket_1}/> //