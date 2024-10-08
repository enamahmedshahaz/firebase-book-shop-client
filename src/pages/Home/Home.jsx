
import Banner from "../Banner/Banner";
import Books from "../Books/Books";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import HowItWorks from "./HowItWorks";
import OurProducts from "./OurProducts";


const Home = () => {
    return (
        <div>
            <div className="mt-6">
                <Banner></Banner>
            </div>
            
            <div className="mt-6">
                <HowItWorks></HowItWorks>
            </div>

            <div className="mt-6">
                <OurProducts></OurProducts>
            </div>

            <div className="mt-6">
                <ContactUs></ContactUs>
            </div>

            <div className="mt-6">
                <AboutUs></AboutUs>
            </div>

        </div>
    );
};

export default Home;