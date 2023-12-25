
import { useLoaderData } from 'react-router-dom';
import './BookList.css';
import Book from '../Book/Book';

const BookList = () => {
    const loadBooksdata = useLoaderData();

    return (
        <div className='container booklist'>
            <h2 className='text-capitalize fw-7 text-black'>Your Search Result</h2>
            <div className='booklist-content grid'>
                {
                    loadBooksdata.docs.map((book, index) => (
                        <Book key={index} books={book} />
                    ))
                }
            </div>
            <p>Good morning</p>
        </div>
    );
};

export default BookList;
