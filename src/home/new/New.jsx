import React, { useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import styled from "./New.module.css";
import { FaChevronCircleLeft, FaChevronCircleRight, FaRegLightbulb } from "react-icons/fa";
import mensFormalShoes from "../../data/mensFormalShoes.json";
import mensSportShoes from "../../data/mensSportShoes.json";
import womensFormalShoes from "../../data/womensFormalShoes.json";
import womensSportShoes from "../../data/womensSportShoes.json";

const NewMap = [
    ...mensFormalShoes,
    ...mensSportShoes,
    ...womensFormalShoes,
    ...womensSportShoes
]

const NewMaps = () => {
    return(
            <div>
                {NewMap.map((product) => (
                    <NewMap key={product.id} new={product} />
                ))}
            </div>
    )
}


const productsData = [
    {
        id: 8,
        Image: "../public/assest/new/menNew/oxfordNew.jpg",
        title: "کقش مجلسی مدل آکسفورد",
        subtitle: "رنگ مشکی سایز 37 تا 44",
        code: "کد 8746",
        price: "4/000/000",
        link: "#"
    },
    {
        id: 15,
        Image: "../public/assest/new/menNew/maxNew.jpg",
        title: "نایک مدل Air Max",
        subtitle: "رنگ طوسی سایز 38 تا 44",
        code: "کد 8445",
        price: "3/600/000",
        link: "#"
    },
    {
        id: 41,
        Image: "../public/assest/new/womenNew/shabNew.jpg",
        title: "کفش مجلسی مدل شبتاب",
        subtitle: "رنگ نقره ای سایز 36 تا 40",
        code: "کد 1007",
        price: "3/200/000",
        link: "#"
    },
    {
        id: 52,
        Image: "../public/assest/new/womenNew/slingNew.jpg",
        title: "کفش مجلسی مدل Sling Back",
        subtitle: "رنگ بژ سایز 36 تا 41",
        code: "کد 1030",
        price: "3/800/000",
        link: "#"
    },
    {
        id: 100,
        Image: "../public/assest/new/womenNew/zoomNew.jpg",
        title: "نایک مدل Zoom",
        subtitle: "رنگ مشکی-سفید سایز 36 تا 40",
        code: "کد 8208",
        price: "3/200/000",
        link: "#"
    },
    {
        id: 108,
        Image: "../public/assest/new/womenNew/airFNew.jpg",
        title: "نایک مدل Air Jordon",
        subtitle: "رنگ سفید-آبی روشن سایز 36 تا 40",
        code: "کد 8226",
        price: "3/500/000",
        link: "#"
    },
]

const New = ({product}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const totalItems = productsData.length;


    useEffect(() => {
        const updateItemsPerPage = () => {
            if (sliderRef.current) {
                const computedStyle = window.getComputedStyle(sliderRef.current);
                let currentItemsPerPage = parseInt(computedStyle.getPropertyValue('--items-per-page'));
                if (isNaN(currentItemsPerPage) || currentItemsPerPage === 0) {
                    currentItemsPerPage = 1;
                }
                if (currentItemsPerPage !== itemsPerPage){
                    setItemsPerPage(currentItemsPerPage);
                    const maxPossibleIndex = Math.max(0, totalItems - currentItemsPerPage);
                    setCurrentIndex(prevIndex => Math.min(prevIndex, maxPossibleIndex));
                }
            }
        };

        updateItemsPerPage();
        window.addEventListener('resize', updateItemsPerPage);

        return () =>{
            window.removeEventListener('resize', updateItemsPerPage);
        };
    }, [totalItems, itemsPerPage])

    const maxIndex = Math.max(0, totalItems - itemsPerPage);

    const handleNext = () => {
        if (currentIndex < totalItems - itemsPerPage) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0){
            setCurrentIndex(prevIndex => prevIndex - 1);
        }
    };

    useEffect(() => {
        if (sliderRef.current) {
            const itemWidthPerPage = 100 / itemsPerPage;
            sliderRef.current.style.transform = `translateX(-${currentIndex * itemWidthPerPage}%)`;
        }
    }, [currentIndex, itemsPerPage])

    const isAtStart = currentIndex === 0;
    const isAtEnd = currentIndex >= maxIndex;

    return(
        <div className={styled.mainContainer}>
          <h2 id="New" className={styled.sectionTitle}><FaRegLightbulb /> جدیدترین ها</h2>
          <p className={styled.newText}>جدیدترین کفش های موجود شده </p>
          <div className={styled.newProductsSliderContainer}>
             <div 
               className={`${styled.sliderButton} ${styled.prevButton} ${isAtStart ? styled.disabled : ''}`}
               onClick={handlePrev}>
                 <FaChevronCircleLeft />
             </div>
             <div className={styled.sliderWrapper}>
                 <div className={styled.productList} ref={sliderRef}>
                    {productsData.map(product => (
                        <div key={product.id} className={styled.productItem}>
                            <div className={styled.productImageContainer}>
                                <img src={product.Image} alt={product.title} />
                            </div>    
                            <h3>{product.title}</h3>
                            <p>{product.subtitle}</p>
                            <p>{product.code}</p>
                            <p className={styled.price}>{product.price}</p>
                            <Link to={`/product/${product.id}`}>مشاهده</Link>
                        </div>
                    ))}
                </div>
            </div>
            <div 
              className={`${styled.sliderButton} ${styled.nextButton} ${isAtEnd ? styled.disabled : ''}`}
              onClick={handleNext}>
                <FaChevronCircleRight />
            </div>
        </div>
       </div>                    
    )
}

export default New;

                                
    







