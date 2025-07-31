import React, {useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styled from "./BuyShop.module.css";
import Menu from "../home/menu/Menu";
import { useShop } from "../shopContext/ShopContext";
import Fotter from "../home/fotter/Fotter";
import ModalMessage from "../modalMessage/ModalMessage";


import mensFormalShoes from "../data/mensFormalShoes.json"
import mensSportShoes from '../data/mensSportShoes.json';
import womensFormalShoes from '../data/womensFormalShoes.json';
import womensSportShoes from '../data/womensSportShoes.json';

const allProductsForLookup = [
    ...mensFormalShoes,
    ...mensSportShoes,
    ...womensFormalShoes,
    ...womensSportShoes
]



const BuyShop = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [modalMessage, setModalMessage] = useState(null);

    const [selectedSize, setSelectedSize] = useState('');

    const { addToWishList, addToCart } = useShop()

    const product = allProductsForLookup.find((item) => 
        item.id === id);



    const [mainImage, setMainImage] = useState(product?.mainImage?.replace("../public" , "")|| "");
    const handleImageChamge = (imgPath) => {
        setMainImage(imgPath.replace("../public", ""))
    }


    if (!product){
        return <div className={styled.loading}><p>Loading Cheacking ...jhhjashx hjc h</p></div>
    }

    const handleBuyNow = () => {
   
       const productDataForActions = {
            id: product.id,
            image: product.mainImage,
            title: product.title,
            price: product.price,
       
        };
      navigate('/payment', { state : { product: productDataForActions} })
}

    

    const handleAddToWishList = () =>{
        const productDataForActions = {
            id: product.id,
            image: product.mainImage,
            title: product.title,
            price: product.price,
       
        };

        addToWishList(productDataForActions);
        setModalMessage(`${product.title} به علاقه مندی ها اضافه شد`);
        return
    }


    const handleAddToCart = () =>{
        const productDataForActions = {
            id: product.id,
            image: product.mainImage,
            title: product.title,
            price: product.price,
       
        };
        
        addToCart(productDataForActions);
        setModalMessage(`${product.title} به سبد خرید اضافه شد`);
    }

    const closeModal = () =>{
        setModalMessage(null)
    }

    const handleSizeClick = ()=> {
        setSelectedSize(size)
    }


   

    return(
        <div className={styled.buyShop}>
            <Menu />
        <div className={styled.buyShopContainer}>
            <div className={styled.imageGallery}>    
                  <img src={mainImage}  className={styled.mainImage} />
                    
                    <div className={styled.thumbnailImages}> 
                     {product.images.map((img, index) => (
                        <img 
                          key={index}
                          src={img.replace("../public", "")}
                          className={styled.thumbnail}
                          onMouseEnter={() => handleImageChamge(img)}
                          onClick={() => handleImageChamge(img)}
                         
                        />
                    ))}    
                   </div>
                   
                       
                   
            </div>

            <div className={styled.productInfo}>
                <h3 className={styled.productTitle}>{product.title}</h3>
                <p className={styled.productDescription}>{product.color}</p>
                 <p className={styled.productDescription}>{product.description}</p>
                <p className={styled.sizes} onClick={handleSizeClick}>سایز: {product.size}</p>
                <p className={styled.oldPrice}>{product.oldPrice}</p>
                <p className={styled.productPrice}>{product.price} تومان</p>
                <div className={styled.buttonContainer}>
                  <button className={styled.buttonBuy} onClick={handleBuyNow}>خرید</button>
                  <button className={styled.buttonFavorite} onClick={handleAddToWishList}>اضافه به علاقه مندی ها</button>
                  <button className={styled.buttonShopCard} onClick={handleAddToCart}>اضافه به سبد خرید</button>
                </div>
            </div>
            <ModalMessage message={modalMessage} onClose={closeModal} />


           </div>
            <Fotter />
        </div>   
           
                          
    )
}



export default BuyShop;