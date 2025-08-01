import React from "react";
import { useShop } from "../../shopContext/ShopContext";
import styled from "./WishListPage.module.css";


function WishListPage () {
    const { wishList, RemoveFromWishList} = useShop();

    return(
        <div className={styled.wishListContainer}>
            <h3 className={styled.title}>علاقه مندی های من</h3>
            {wishList.length === 0 ? (
                <p className={styled.emptyMessage}>علاقه مندی ها خالی است ...</p>
            ) : (
                <ul className={styled.productList}>
                    {wishList.map((product) => (
                        <li key={product.id} className={styled.productItem}>
                            <img 
                              src={product.image.replace("/public", "")}
                              alt={product.title}
                              className={styled.productImage}
                            />
                            <div className={styled.productInfo}>
                                <h3 className={styled.productTitle}>{product.title}</h3>
                                <p className={styled.productPrice}>{product.price}</p>
                            </div>
                            <button
                               onClick={() => RemoveFromWishList(product.id)}
                               className={styled.removeButton}
                            >
                              حذف  
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default WishListPage;