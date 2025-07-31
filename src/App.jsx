import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./home/Home";
import Menu from "./home/menu/Menu";
import ShopPage from "./shopPage/ShopPage";
import BuyShop from "./buyShop/BuyShop";
import { ShopProvider } from "./shopContext/ShopContext";
import WishListPage from "./wishandcart/wish/WishListPage";
import CartPage from "./wishandcart/cart/Cart";
import PaymentPage from "./paymentPage/PaymentPage";
import ReactDOM from "react-dom/client";




function App() {
  

  return (
   
     
          <ShopProvider>
            <div>
               <Menu />

          <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/product/:id" element={<BuyShop />} />
                <Route path="/wishList" element={<WishListPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/payment" element={<PaymentPage />} />
                
            </Routes>
          </main>
        </div>
        </ShopProvider>
        
      
  )
}

export default App
