import React from "react";
import { useShop } from "../../shopContext/ShopContext";
import styled from "./Cart.module.css";


function CartPage() {
    const { cart, removeFromCart, decreaseQuantity, increaseQuantity } = useShop();
    const total = cart.reduce((sum, item) => {
        const priceValue = parseFloat(item.price.replace(/[^0-9]+/g,""));
        return sum + (priceValue * item.quantity);
    },0);

    return(
        <div className={styled.cartContainer}>
            <h2 className={styled.title}>سبد خرید من</h2>
            {cart.lenght === 0 ? (
                <p className={styled.emptyMessage}>سبد خرید شما خالی است</p>
            ) : (
                <div>
                    <ul className={styled.productList}>
                        {cart.map((product) => (
                            <li key={product.id} className={styled.productItem}>
                                <img 
                                  src={product.image.replace("/public", "")}
                                  alt={product.title}
                                  className={styled.productImage}
                                />
                                <div className={styled.productInfo}>
                                    <h3 className={styled.productTitle}>{product.title}</h3>
                                    <p className={styled.productPrice}>{product.price}</p>
                                    <p className={styled.quantityContainer}>
                                        تعداد : 
                                        <button onClick={()=> decreaseQuantity(product.id)} className={styled.quantityButton}>-</button>
                                        {product.quantity}
                                        <button onClick={()=> increaseQuantity(product.id)} className={styled.quantityButton}>+</button>
                                    </p>
                                    <p className={styled.itemTotalPrice}>جمع جز : {(parseFloat(product.price.replace(/[^0-9.-]+/g,"")) * product.quantity).toLocaleString()} تومان</p>
                                </div>
                                <button onClick={()=> removeFromCart(product.id)} className={styled.removeButton}>حذف</button>
                            </li>
                        ))}
                    </ul>
                    <h3 className={styled.totalSection}>مجموع کل : {total.toLocaleString()}</h3>
                    <button className={styled.checkoutButton}>
                        تکمیل خرید 
                    </button>
                </div>
            )}
        </div>                  
    )
}


export default CartPage;