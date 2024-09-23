import { useParams } from "react-router-dom";

const BookDetails = () => {

    const { bookId } = useParams();

    return (
        <div>
            This is book details page- id -- {bookId}
        </div>
    );
};

export default BookDetails;