import React from "react";
import styled from "./ProductCard.module.css";
import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
    return(
        <div className={styled.productCard}>
            <div className={styled.imageWrapper}>
                <img src={product.mainImage} alt={product.title} className={styled.productImage} />
            </div>
            <div className={styled.productInfo}>
                <h3 className={styled.productName}>{product.title}</h3>
                <p className={styled.productSubtitle}>{product.subtitle}</p>
                <p className={styled.productBuyCode}>{product.buyCode}</p>
                <p className={styled.productPrice}>{product.price}</p>
                <Link to={`/product/${product.id}`} className={styled.buyLink}>ادامه</Link>
            </div>
        </div>           
    )
} 


export default ProductCard;