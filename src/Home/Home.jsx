import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Header></Header>
            <Banner></Banner>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;