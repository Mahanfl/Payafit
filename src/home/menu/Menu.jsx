import React,{ useState } from "react";
import { Link } from "react-router-dom";
import { HashLink} from "react-router-hash-link"
import styled from "./Menu.module.css";
import { FaSearch, FaHeart, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useShop } from "../../shopContext/ShopContext";



const Menu = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMaleSubMenuOpen, setIsMaleSubMenuOpen] = useState(false);
    const [isFemaleSubMenuOpen, setIsFemaleSubMenuOpen] = useState(false);
    const [showFavorites, setShowFavorites] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const { cart, wishList} = useShop();


    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }
    const toggleMaleSubMenu = () => {
        setIsMaleSubMenuOpen(!isMaleSubMenuOpen);
        setIsFemaleSubMenuOpen(false);
    }
    const toggleFemaleSubMenu = () => {
        setIsFemaleSubMenuOpen(!isFemaleSubMenuOpen);
        setIsMaleSubMenuOpen(false);
    }

    return(
        <nav className={styled.navbar}>
            <div className={`${styled.desktopMenu} ${styled.navbarContainer}`}>
                <div className={styled.logoSection}>
                    <img src="/assest/logo/logo.png" alt="LogoPayafit" className={styled.logo} />
                    <span className={styled.siteName}><Link to="/">پایافیت</Link></span> 
                </div>

                <ul className={styled.navLinks}>
                    <li className={styled.navItem} onMouseEnter={()=> setIsMaleSubMenuOpen(true)} 
                    onMouseLeave={()=> setIsMaleSubMenuOpen(false)}>
                        مردانه
                        {isMaleSubMenuOpen && (
                            <ul className={styled.subMenu}>
                                <li><Link to='/shop?category=men&type=formal'>مجلسی</Link></li>
                                <li><Link to='/shop?category=men&type=sport'>اسپرت</Link></li>
                            
                            </ul>
                        )}
                    </li>

                    <li className={styled.navItem} onMouseEnter={()=> setIsFemaleSubMenuOpen(true)} 
                    onMouseLeave={()=> setIsFemaleSubMenuOpen(false)}>
                        زنانه
                        {isFemaleSubMenuOpen && (
                            <ul className={styled.subMenu}>
                               <li><Link to='/shop?category=women&type=formal'>مجلسی</Link></li>
                               <li><Link to='/shop?category=women&type=sport'>اسپرت</Link></li>
                            </ul>
                        )}
                    </li> 
                    <li className={styled.navItem}><HashLink to="/#Offers">تخفیف ها</HashLink></li>  
                    <li className={styled.navItem}><HashLink to="/#New">جدیدترین ها</HashLink></li> 
                    <li className={styled.navItem}><HashLink to="/#Gold">خریدطلایی</HashLink></li> 
                    <li className={styled.navItem}><HashLink to="/#contact">تماس با ما</HashLink></li>
                </ul>

                <div className={styled.iconsSection}>
                    <Link to="#" className={styled.iconS}><FaSearch /></Link> 
                    <Link to="/wishList" className={styled.icon}>
                        <FaHeart />
                        {wishList.length > 0 && <span>{wishList.length}</span>}
                    </Link>
                    <Link to="/cart" className={styled.icon}>
                    <FaShoppingCart />
                    {cart.length > 0 && <span>{cart.length}</span>}
                    </Link> 
                </div>
               </div>

               <div className={styled.mobileMenu}>
                <div className={styled.mobileHeader}>
                    <div className={styled.hamburgerMenu} onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </div>
                    <div className={styled.mobileLogoSection}>
                        <img src="/assest/logo/logo.png" alt="LogoPayafit" className={styled.logo} />
                        <span className={styled.siteName}><Link to="/">پایافیت</Link></span>
                    </div>
                    <div className={styled.iconsSection}>
                        <a href="#" className={styled.iconS}><FaSearch /></a>  
                        <Link to="/wishList" className={styled.icon}>
                           <FaHeart />
                           {wishList.length > 0 && <span>{wishList.length}</span>}
                        </Link> 
                        <Link to="/cart" className={styled.icon}>
                           <FaShoppingCart />
                           {cart.length > 0 && <span>{cart.length}</span>}
                        </Link> 
                        
                    </div>
                </div>

                <ul className={`${styled.mobileNavLinks} ${isMobileMenuOpen ? styled.open : ''}`}>
                    <li className={styled.mobileNavItem} onClick={toggleMaleSubMenu}>
                        مردانه
                        {isMaleSubMenuOpen && (
                            <ul className={styled.mobileSubMenu}>
                                <li><Link to='/shop?category=men&type=formal'>مجلسی</Link></li> 
                                <li><Link to='/shop?category=men&type=sport'>اسپرت</Link></li>  
                            </ul>
                        )}
                    </li> 
                    <li className={styled.mobileNavItem} onClick={toggleFemaleSubMenu}>
                        زنانه
                        {isFemaleSubMenuOpen && (
                            <ul className={styled.mobileSubMenu}>
                                <li><Link to='/shop?category=women&type=formal'>مجلسی</Link></li>  
                                <li><Link to='/shop?category=women&type=sport'>اسپرت</Link></li>
                            </ul>
                        )}
                    </li>   
                     <li className={styled.navItem}><HashLink to="/#Offers">تخفیف ها</HashLink></li>  
                    <li className={styled.navItem}><HashLink to="/#New">جدیدترین ها</HashLink></li> 
                    <li className={styled.navItem}><HashLink to="/#Gold">خریدطلایی</HashLink></li> 
                    <li className={styled.navItem}><HashLink to="/#contact">تماس با ما</HashLink></li>
                 </ul> 
                </div>
            </nav>                            
    )
}

export default Menu;