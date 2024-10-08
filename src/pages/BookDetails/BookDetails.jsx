import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';


const BookDetails = () => {

    // const { bookId } = useParams();
    // const [book, setBook] = useState({});

    const book = useLoaderData();

    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    /*
        useEffect(() => {
    
            fetch('/books.json')
                .then((response) => response.json())
                .then((books) => {
                    // Find the book that matches the bookId
                    const selectedBook = books.find((b) => b.bookId === parseInt(bookId));
                    setBook(selectedBook);
    
                });
        }, [bookId]);
    
    */
    const handleClickWish = () => {
        toast.success(`Book "${bookName}" Added to your wishlist.`);

    }

    const handleClickCart = () => {
        toast.success(`Book "${bookName}" Added to Cart.`);
    }


    return (
        <div className="flex flex-col lg:flex-row justify-between items-start gap-4 bg-rose-100 p-10 rounded-md">

            <div><Toaster /></div>

            <div className="flex flex-col justify-center items-center gap-2">

                <img className="rounded-xl" src={image} alt={`image of book named ${bookName}`}></img>

                <div>
                    <div>
                        <span className="text-3xl font-bold text-gray-700">{bookName}</span> by
                        <span className="text-2xl font-semibold italic text-gray-500"> {author}</span>
                    </div>

                    <div className="flex items-center gap-2 mt-3">

                        <p> Tags: </p>

                        <div>
                            {
                                tags?.map((tag, index) =>
                                    <div key={index} className="badge bg-yellow-200 badge-outline ml-2">
                                        {tag}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full lg:hidden">
                <div className="divider text-white"></div>
            </div>

            <div className="w-1/2 flex flex-col gap-4 items-start">

                <div>
                    <h3 className="text-2xl font-semibold text-gray-600">
                        Rating:
                        <span className="text-xl font-semibold text-gray-700 pl-2">
                            {rating} <FontAwesomeIcon className=" text-yellow-500" icon={faStar} />
                        </span>
                    </h3>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold text-gray-600">
                        Pages:
                        <span className="text-xl text-gray-700 pl-2">
                            {totalPages} total
                        </span>
                    </h3>
                </div>


                <div>
                    <h3 className="text-2xl font-semibold text-gray-600">
                        Category:
                        <span className="text-xl text-gray-700 pl-2">
                            {category}
                        </span>
                    </h3>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold text-gray-600">Review:  </h3>
                    <p className="text-xl text-gray-700 pl-2">{review}</p>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold text-gray-600">
                        Publisher:
                        <span className="text-xl text-gray-700 pl-2">
                            {publisher}
                        </span>
                    </h3>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold text-gray-600">
                        Published Year:
                        <span className="text-xl text-gray-700 pl-2">
                            {yearOfPublishing}
                        </span>
                    </h3>
                </div>


                <div className="flex gap-2">
                    <button onClick={handleClickWish} className="btn  text-white  bg-rose-300">Wish to Read</button>
                    <button onClick={handleClickCart} className="btn text-white  bg-rose-300">Add to Cart</button>
                </div>

            </div>
        </div >
    );
};

export default BookDetails;