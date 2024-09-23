import { useState } from "react";
import Banner from "../Banner/Banner";
import { useEffect } from "react";
import BookCard from "../Book/BookCard";


const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data));

    }, []);

    return (
        <>

            <Banner></Banner>
            <div>
                This is books section: books {books.length}
                <div className="grid grid-cols-3 gap-3">
                    {
                        books.map(aBook => <BookCard key={aBook.bookId} book={aBook}></BookCard>)
                    }
                </div>
            </div>

        </>


    );
};

export default Books;