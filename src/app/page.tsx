import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Selling from "../components/Selling";
import Product from "../components/Product";
import Exclusive from "../components/Exclusive";
import Cloth from "../components/Cloth";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";

function Homepage (){
  return(
    <>
    <Navbar/>
    <Hero/>
    <Selling/>
    <Product/>
    <Exclusive/>
    <Cloth/>
    <Feedback/>
    <Footer/>
    </>
  )
}
export default Homepage