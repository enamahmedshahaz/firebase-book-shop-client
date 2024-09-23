import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {

    const { bookId } = useParams();
    const [book, setBook] = useState({});

    useEffect(() => {
        
        fetch('/books.json')
            .then((response) => response.json())
            .then((books) => {
                // Find the book that matches the bookId
                const selectedBook = books.find((b) => b.bookId === parseInt(bookId));
                setBook(selectedBook);

            });
    }, [bookId]);

    return (
        <div>
            boook name is --  {book.bookName}
        </div>
    );
};

export default BookDetails;