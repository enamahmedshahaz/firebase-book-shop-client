import Banner from "../Banner/Banner";
import Books from "../Books/Books";


const Home = () => {
    return (
        <div>
            <div className="mt-6">
                <Banner></Banner>
            </div>

            <div className="mt-6">
                <Books></Books>
            </div>
            
        </div>
    );
};

export default Home;