import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer/Footer";
import Header from "../pages/Header/Header";
import Banner from "../pages/Banner/Banner";



const Root = () => {
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

export default Root;