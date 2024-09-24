import { useState } from "react";
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
            <div>
                This is books section: books {books.length}
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3 ">
                    {
                        books.map(aBook => <BookCard key={aBook.bookId} book={aBook}></BookCard>)
                    }
                </div>
            </div>

        </>


    );
};

export default Books;