import React, { createContext, useState, useContext, Children } from "react";

const ShopContext = createContext();


export const ShopProvider = ({ children }) => {
    const [wishList, setWishList] = useState([]);

    const addToWishList = (product) => {
        setWishList((prevWishList) =>{
            if (!prevWishList.some(item => item.id === product.id)) {
                return[...prevWishList, product];
            }
            return prevWishList
        });
    };

    const removeFroWishList = (productId) => {
        setWishList((prevWishList) => 
            prevWishList.filter((product) => product.id !== productId)
        )
    };

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            if(!prevCart.some(item => item.id === product.id)) {
                return [...prevCart,{ ...product, quantity: 1}]
            } else{
                return prevCart.map(item => 
                    item.id === product.id ? { ...item, quantity: item.quantity + 1} : item);
            }
        });
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) =>
            prevCart.filter((product) => product.id !== productId)
      );
    };

    const decreaseQuantity = (productId) => {
        setCart((prevCart) => 
            prevCart.map(item =>
                item.id === productId ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1} : item)
            ) 
    }

    const increaseQuantity = (productId) => {
        setCart((prevCart) => 
            prevCart.map(item => 
                item.id === productId ? { ...item, quantity: item.quantity + 1} : item)
            )
    }

    return(
        <ShopContext.Provider
            value={{
                wishList,
                addToWishList,
                removeFroWishList,
                cart,
                addToCart,
                removeFromCart,
                decreaseQuantity,
                increaseQuantity
            }}
            >
            {children}
        </ShopContext.Provider>
    )
}

export const useShop = () => {
    return useContext(ShopContext);
}

