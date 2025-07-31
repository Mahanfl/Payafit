
import Head from "./head/Head";
import Offers from "./offers/Offers";
import New from "./new/New";
import GoldShop from "./goldshop/GoldShop";
import Footer from "./fotter/Fotter";




function Home () {
    return(  
        <div>
           <Head />
           <Offers />
           <New />
           <GoldShop />
           <Footer />
        </div> 
    )
}

export default Home;