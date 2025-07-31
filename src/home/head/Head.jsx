import React, { useState, useEffect } from "react";
import { HashLink} from "react-router-hash-link";
import styled from "./Head.module.css";
import { useShop } from "../../shopContext/ShopContext";
import {  FaChevronLeft, FaChevronRight } from "react-icons/fa";
import mensSportShoes from "../../data/mensSportShoes.json";

const SportMenMap = [
    ...mensSportShoes,
    
]

const SportMenMaps = () => {
    return(
            <div>
                {SportMenMap.map((product) => (
                    <SportMenMap key={product.id} new={product} />
                ))}
            </div>
    )
}

const slidesData = [
    {
        id: 16,
        image: "/assest/slider/sug4.jpg",
        title: "تخفیف Nike",
        description: (
            <>نایک AirForceOne رو با 15% <span className={styled.offer}>تخفیف</span> میتونی بگیری</>
        ),
        linkText: "جزئیات تخفیف",
        linkUrl: "#Offers"
    },
    {
        id: 2,
        image: "/assest/slider/sug3.jpg",
        title: "مجلسی های جدید رسید ...",
        description: (
            <>از کفش های مجلسی <span className={styled.new}>جدید</span> غافل نشو</>
        ),
        linkText: "دیدن محصولات جدید",
        linkUrl: "/shop?category=women&type=formal"
    }
]

const Head = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() =>{
        const slideInterval = setInterval(() =>{
            setCurrentSlide((prevSlide) =>
                prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1);
        }, 4000)

        return () => clearInterval(slideInterval);
    },[]);

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1)
    }

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slidesData.length - 1 : prevSlide - 1)
    }

    const currentSlideData = slidesData[currentSlide];

    return(
        <div className={styled.slideContainer}>
           {slidesData.map((slide, index) => ( 
            <div 
             key={slide.id}
             className={`${styled.slide} ${currentSlide === index ? styled.active : ''}`}
             style={{ backgroundImage: `url(${slide.image})`}}>
                <div className={styled.overlay}></div>
                <div className={styled.content}>
                    <h2 className={styled.title}>{slide.title}</h2>
                    <p className={styled.description}>{slide.description}</p>
                    <HashLink to={slide.linkUrl} className={styled.link}>{slide.linkText}</HashLink>
                </div>
            </div>
           ))}

            <button className={`${styled.navButton} ${styled.prevButton}`} onClick={goToPrevSlide}><FaChevronRight /></button>  
            <button className={`${styled.navButton} ${styled.nextButton}`} onClick={goToNextSlide}><FaChevronLeft /></button>

            <div className={styled.dotsContainer}>
                {slidesData.map((_, index) => (
                    <span 
                      key={index}
                      className={`${styled.dot} ${currentSlide === index ? styled.active : ''}`} onClick={()=> setCurrentSlide(index)}></span>
                ))}
            </div>
            </div>
    )
}

export default Head;
