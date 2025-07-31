import React,{ useState } from "react";
import styled from "./Offers.module.css";
import { FaPercent } from "react-icons/fa";
import { Link } from "react-router-dom";
import mensSportShoes from "../../data/mensSportShoes.json";
import womensFormalShoes from "../../data/womensFormalShoes.json";
import womensSportShoes from "../../data/womensSportShoes.json"

const offersMap = [
    ...mensSportShoes,
    ...womensFormalShoes,
    ...womensSportShoes
]

const OffersMap = () => {
    return(
            <div>
                {offersMap.map((product) => (
                    <OffersMap key={product.id} offer={product} />
                ))}
            </div>
    )
}


const offersData = [
    {
        id: 16,
        defaultImage: '/assest/offers/menOffer/airFOffer.jpg',
        hoverImage: '/assest/offers/menOffer/AirForce2.jpeg',
        title: 'نایک مدل AirForceOne',
        description: 'رنگ سفید سایز 39 تا 43',
        code: "کد 8445",
        oldPrice: '3/500/000',
        currentPrice: '2/975/000',
        datailsLink: '#'
    },
    {
        id: 20,
        defaultImage: '/assest/offers/menOffer/monoliteOffer.jpg',
        hoverImage: '/assest/offers/menOffer/monolite2.jpg',
        title: 'کفش اسپرت Monolite',
        description: 'رنگ مشکی سایز 39 تا 44',
        code: "کد 8459",
        oldPrice: '3/000/00',
        currentPrice: '2/550/000',
        datailsLink: '#'
    },
    {
        id: 45,
        defaultImage: '/assest/offers/womenOffer/heeloffer.jpg',
        hoverImage: '/assest/offers/womenOffer/blackHeelW3.jpeg',
        title: 'صندل مجلسی مدل نورآلینا',
        description: 'رنگ سفید سایز 36 تا 41',
        code: "کد 1017",
        oldPrice: '3/200/000',
        currentPrice: '2/720/000',
        datailsLink: '#'
    },
    {
        id: 105,
        defaultImage: '/assest/offers/womenOffer/casualOffer.jpg',
        hoverImage: '/assest/offers/womenOffer/casual3.webp',
        title: 'کفش اسپرت مدل Casual',
        description: 'رنگ مشکی سایز 36 تا 41',
        code: "کد 8223",
        oldPrice: '3/000/000',
        currentPrice: '2/550/000',
        datailsLink: '#'
    }
]

const Offers = () => {
    return(
        <section className={styled.offersSection}>
            <h2 id="Offers" className={styled.sectionTitle}><FaPercent /> تخفیف ها</h2>
            <p className={styled.offersText}>پرفروش ترین کفش های چند ماه اخیر را با 15 درصد تخفیف میتونی بخری</p>
            <div className={styled.offersGride}>
                {offersData.map((offer) => (
                    <OfferItem key={offer.id} offer={offer} />
                ))}
            </div>
        </section>        

    )
};

const OfferItem = ({offer, product}) =>{
    const [isHovered, setIsHovered] = useState(false);

    return(
        <div 
           className={styled.offerCard}
           onMouseEnter={()=> setIsHovered(true)}
           onMouseLeave={()=> setIsHovered(false)}>
            <div className={styled.imageContainer}>
                <img 
                  src={offer.defaultImage}
                  alt={offer.title}
                  className={`${styled.offerImage} ${isHovered ? styled.hidden : styled.visible}`}
                />
                <img 
                  src={offer.hoverImage}
                  alt={offer.title}
                  className={`${styled.offerImage} ${isHovered ? styled.visible : styled.hidden}`}
                />
            </div>
            <div className={styled.offerContent}>
                <h3 className={styled.offerTitle}>{offer.title}</h3>
                <p className={styled.offerDescription}>{offer.description}</p>
                <p className={styled.offerDescription}>{offer.code}</p>
                <div className={styled.priceContainer}>
                    {offer.oldPrice && (
                        <span className={styled.oldPrice}>
                            {offer.oldPrice} تومان
                        </span>
                    )}
                    <span className={styled.currentPrice}>
                        {offer.currentPrice} تومان
                    </span>
                </div>
                <Link to={`/product/${offer.id}`} className={styled.datailsLink}>مشاهده جزئیات</Link>
            </div>
           </div>
    )
};


export default Offers;