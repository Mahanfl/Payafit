import React from "react";
import styled from "./GoldShop.module.css";
import { FaGem } from "react-icons/fa";
import { Link } from "react-router-dom";
import mensFormalShoes from "../../data/mensFormalShoes.json";
import womensFormalShoes from "../../data/womensFormalShoes.json";

const GoldMaps = [
    ...mensFormalShoes,
    ...womensFormalShoes
]


const GoldMap = () => {
    return(
            <div>
                {GoldMaps.map((product) => (
                    <GoldMaps key={product.id} new={product} />
                ))}
            </div>
    )
}


const goldItemData = [
    {
        id: 200,
        image: "/assest/goldShop/menGold/adrinGold.jpg",
        text: "ست کیف و کفش مجلسی مدل Adrin",
        code: "کد 5002",
        price: "4/200/000",
        link: '#',
    },
    {
        id: 201,
        image: "/assest/goldShop/menGold/rohomGold.jpg",
        text: "ست کیف و کفش مجلسی مدل Rohom",
        code: "کد 5008",
        price: "4/000/000",
        link: '#',
    },
    {
        id: 300,
        image: "/assest/goldShop/womenGold/zarinGold.jpg",
        text: "ست کیف و کفش مجلسی مدل Zarin",
        code: "کد 5100",
        price: "4/000/000",
        link: '#',
    },
    {
        id: 301,
        image: "/assest/goldShop/womenGold/avidGold.jpg",
        text: "ست کیف و کفش مجلسی مدل Avid",
        code: "کد 5107",
        price: "4/200/000",
        link: '#',
    },
    

]

const GoldShop = ({ product }) => {
    return(
        <section className={styled.goldShopSection}>
            <h2 id="Gold" className={styled.sectionTitle}><FaGem /> خرید طلایی</h2>
            <p className={styled.goldshopText}>با خرید کفش های خرید طلایی یک کیف هم میتونی هدیه بگیری</p>

            <div className={styled.itemsContainer}>
                {goldItemData.map((item) => (
                    <div key={item.id} className={styled.goldItemCard}>
                        <div className={styled.imageWrapper}>
                            <img src={item.image} alt={item.text} className={styled.itemImage} />
                        </div>

                        <div className={styled.itemContent}>
                            <h3 className={styled.itemText}>{item.text}</h3>
                            <p className={styled.itemText}>{item.code}</p>
                            <div className={styled.itemPrice}>
                                <span>{item.price}</span>
                                <FaGem className={styled.goldIcon} />
                            </div>

                            <Link to={`/product/${item.id}`} className={styled.datailsLink}>مشاهده جزئیات</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default GoldShop;