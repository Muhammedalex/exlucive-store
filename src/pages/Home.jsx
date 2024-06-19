import CategoriesList from "../components/Home/CategoriesList"
import FlashSale from "../components/Home/FlashSale"
import HeroSlider from "../components/Home/HeroSlider"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BrowserByCat from "../components/Home/BrowserByCat";
import ThisMonth from "../components/Home/ThisMonth";
import Banner from "../components/Home/Banner";
import OurProducts from "../components/Home/OurProducts";
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full my-10">
        <div className="flex flex-col items-start justify-start w-full md:flex-row md:gap-7">
            <CategoriesList />
            <HeroSlider />
        </div>
        <FlashSale />
        <BrowserByCat />
        <ThisMonth />
        <Banner />
        <OurProducts />
    </div>
  )
}

export default Home
