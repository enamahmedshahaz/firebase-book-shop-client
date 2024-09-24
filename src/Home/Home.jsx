import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Header></Header>
            <div className="mt-6">
                <Banner></Banner>
            </div>
            <div className="min-h-screen mt-6">
                <Outlet></Outlet>
            </div>

            <div className="mt-6">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;