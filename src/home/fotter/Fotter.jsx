import React from "react";
import styled from "./Footer.module.css";
import { FaMapMarkedAlt, FaPhoneAlt, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return(
        <footer className={styled.footer}>
            <img src="/assest/logo/logo.png" alt="لوگو پایافیت" className={styled.logo} />
            <div id="contact" className={styled.footerContent}>
                <div className={styled.contactInfo}>
                    <p className={styled.footerText}>
                        فروشگاه اینترنتی پایافیت بیش از 4 سال است که در زمینه انواع کفش های مجلسی و اسپرت مردانه و زنانه فعالیت میکند ما اینجا سعی در این داریم تا بهترین کیفیت را با قیمت به صرفه به شما عرضه کنیم
                    </p>
                    <div className={styled.infoItem}>
                        <FaMapMarkedAlt className={styled.icon} />
                        <span>نشانی : تهران - نیاوران - خیابان بوکان - پلاک 23</span>
                    </div>

                    <div className={styled.infoItem}>
                        <FaPhoneAlt className={styled.icon} />
                        <span>پشتیبانی : 22808791 021</span>
                    </div>

                    <div className={styled.infoItem}>
                        <FaInstagram className={styled.icon} />
                        <span>اینستاگرام : @Payafit_Shop</span>
                    </div>

                    <div className={styled.infoItem}>
                        <FaEnvelope className={styled.icon} />
                        <span>جیمیل : payafitshop@gmail.com</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer;