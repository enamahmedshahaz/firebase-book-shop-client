import Books from "../Books/Books";


const Products = () => {
    return (
        <div>
           <h3 className="text-center text-2xl text-rose-400 font-bold">
                :: Our Awesome Books::
            </h3>

            <div className="mt-6">
                <Books></Books>
            </div>

        </div>
    );
};

export default Products;