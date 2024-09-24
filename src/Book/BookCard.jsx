import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const BookCard = ({ book }) => {

    const { bookId, bookName, author, image, category, tags, rating } = book;

    return (
        
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt={`image of book named ${bookName}`} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {bookName}
                    <div className='flex gap-2 justify-center items-center'>
                        <div className="badge badge-secondary">{category}</div>
                        <div className='text-sm'>{rating} <FontAwesomeIcon icon={faStar} /></div>
                    </div>
                </h2>
                <p>By- {author}</p>
                <div className="card-actions justify-end">
                    {
                        tags.map((tag, index) =>
                            <div key={index} className="badge badge-outline">
                                {tag}
                            </div>
                        )
                    }

                    <Link to={`/books/${bookId}`}>
                        <button className="btn text-white bg-rose-300">Book Details</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default BookCard;