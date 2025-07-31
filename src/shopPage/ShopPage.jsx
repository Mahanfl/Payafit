import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "./ShopPage.module.css";
import ProductCard from "../productCard/ProductCard";
import Footer from "../home/fotter/Fotter"
import mensFormalShoesData from "../data/mensFormalShoes.json";
import mensSportShoesData from "../data/mensSportShoes.json";
import womensFormalShoesData from "../data/womensFormalShoes.json";
import womensSportShoesData from "../data/womensSportShoes.json";


const allProductData = {
    'men-formal' : mensFormalShoesData,
    'men-sport' : mensSportShoesData,
    'women-formal' : womensFormalShoesData,
    'women-sport' : womensSportShoesData,
};

const ShopPage = () => {
    const [products, setProducts] = useState([]);
    const [searchParams] = useSearchParams();

    const category = searchParams.get('category');
    const type = searchParams.get('type');

    const currentCategoryKey = `${category || 'men'}-${type || 'formal'}`;

    useEffect(() => {
        const dataToLoad = allProductData[currentCategoryKey] || [];
        setProducts(dataToLoad);
        window.scrollTo(0,0);
    }, [currentCategoryKey]);

    const goPageTitle = () => {
        if (category === 'men' && type === 'formal') {
            return 'مجلسی های مردانه';
        } else if (category === 'men' && type === 'sport') {
            return 'اسپرت های مردانه';
        } else if (category === 'women' && type === 'formal') {
            return 'مجلسی های زنانه';
        } else if (category === 'women' && type === 'sport') {
            return 'اسپرت های زنانه'
        }
    }


    return(
        <div>
          <div className={styled.shopPage}>
              <h2 className={styled.pageTitle}>{goPageTitle()}</h2>

              <div className={styled.productList}>
                  {products.length > 0 ? (
                     products.map(product => (
                         <ProductCard key={product.id} product={product} />
                  ))
                ) : (
                    <p className={styled.noProducts}>هیچ محصولی یافت نشد ...</p>
                )}
               </div>
            </div>  
            <Footer />
        </div>      
    )
};

export default ShopPage;