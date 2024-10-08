import { useEffect, useState } from "react";

const OurProducts = () => {


    const [books, setBooks] = useState([]);



    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(res => res.json())
            .then(data => setBooks(data.slice(0, 3)));
    }, []);


    return (
        <div>
            <h3 className="text-center text-2xl text-rose-400 font-bold mb-6">
                :: Featured Products ::
            </h3>

            <section className="py-12 bg-rose-100 rounded-lg">
                <div className="container mx-auto px-4">
                   
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {books.map((book) => (
                            <div key={book.bookId} className="relative group">
                                <img
                                    src={book.image}
                                    alt={book.bookName}
                                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                                />
                                {/* Overlay with book info */}
                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-end p-4">
                                    <h3 className="text-lg font-bold text-rose-400">{book.bookName}</h3>
                                    <p className="text-sm text-gray-300">{book.author}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
};

export default OurProducts;