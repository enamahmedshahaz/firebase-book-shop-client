import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer/Footer";
import Header from "../pages/Header/Header";

const Root = () => {
    return (
        <div className="container mx-auto">

            <Header></Header>

            <div className="min-h-screen mt-6">
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Root;