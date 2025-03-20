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

const Localimagelist = () => {
    return (
        <div>
            <h1>MJacket1</h1>
            <img src={M_Jacket_1} widght="42" height="500"/>
            <h1>MJacket2</h1>
            <img src={M_Jacket_2} alt="MJacket1" widght="42" height="500"/>
            <h1>MJacket3</h1>
            <img src={M_Jacket_3} alt="MJacket1" widght="42" height="500"/> 
            <h1>WJacket1</h1>
            <img src={W_Jacket_1} alt="WJacket1" widght="42" height="500"/> 
            <h1>WJacket2</h1>
            <img src={W_Jacket_2} alt="WJacket2" widght="42" height="500"/> 
            <h1>WJacket3</h1>
            <img src={W_Jacket_3} alt="WJacket3" widght="42" height="500"/> 
            <h1>MJeans1</h1>
            <img src={M_Jeans_1} alt="MJeans1" widght="42" height="500"/> 
            <h1>MJeans2</h1>
            <img src={M_Jeans_2} alt="MJeans2" widght="42" height="500"/>
            <h1>MJeans3</h1>
            <img src={M_Jeans_3} alt="MJeans3" widght="42" height="500"/> 
            <h1>WJeans1</h1>
            <img src={W_Jeans_1} alt="WJeans1" widght="42" height="500"/> 
            <h1>WJeans2</h1>
            <img src={W_Jeans_2} alt="WJeans2" widght="42" height="500"/> 
            <h1>WJeans3</h1>
            <img src={W_Jeans_3} alt="WJeans3" widght="42" height="500"/> 
            <h1>MShirt1</h1>
            <img src={M_Shirt_1} alt="MShirt1" widght="42" height="500"/> 
            <h1>MShirt2</h1>
            <img src={M_Shirt_2} alt="MShirt2" widght="42" height="500"/> 
            <h1>MShirt3</h1>
            <img src={M_Shirt_3} alt="MShirt3" widght="42" height="500"/> 
            <h1>WShirt1</h1>
            <img src={W_Shirt_1} alt="WShirt1" widght="42" height="500"/> 
            <h1>WShirt2</h1>
            <img src={W_Shirt_2} alt="WShirt2" widght="42" height="500"/> 
            <h1>WShirt3</h1>
            <img src={W_Shirt_3} alt="WShirt3" widght="42" height="500"/> 
            <h1>MShoes1</h1>
            <img src={M_Shoes_1} alt="MShoes1" widght="42" height="500"/> 
            <h1>MShoes2</h1>
            <img src={M_Shoes_2} alt="MShoes2" widght="42" height="500"/> 
            <h1>MShoes3</h1>
            <img src={M_Shoes_3} alt="MShoes3" widght="42" height="500"/> 
            <h1>WShoes1</h1>
            <img src={W_Shoes_1} alt="WShoes1" widght="42" height="500"/> 
            <h1>WShoes2</h1>
            <img src={W_Shoes_2} alt="WShoes2" widght="42" height="500"/> 
            <h1>WShoes3</h1>
            <img src={W_Shoes_3} alt="WShoes3" widght="42" height="500"/> 
        </div>
    );
};

export default Localimagelist;




//Hacer un ciclo para la importación de todas las imágenes que se encuentran en la carpeta de Ropa Armario//

//<img src={M_Jacket_1}/> //