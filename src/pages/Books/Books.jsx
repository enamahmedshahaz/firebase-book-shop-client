// import { useState } from "react";
// import { useEffect } from "react";
import BookCard from "../Book/BookCard";
import { useLoaderData } from "react-router-dom";


const Books = () => {

    const books = useLoaderData();

    /*const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data));

    }, []);
    */
   
    return (
        <>
            <div>
                <h3 className="text-center text-2xl text-rose-400 font-bold">:: Our Awesome Books:: </h3>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3 mt-6">
                    {
                        books.map(aBook => <BookCard key={aBook.bookId} book={aBook}></BookCard>)
                    }
                </div>
            </div>
        </>

    );
};

export default Books;