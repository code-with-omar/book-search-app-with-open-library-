import './Book.css'
import notFoundImage from '../../images/cover_not_found.jpg'
const Book = ({ books }) => {
    const { cover_i, title, author_name, first_publish_year, edition_count } = books;
    const url = `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`;
    return (
        <div className='book-item flex flex-column flex-sb'>
            <div className="book-item-img">
                <img src={url} alt="" />
            </div>
            <div className="book-item-info text-center text-black">
                <span>{title}</span>
            </div>
            <div className="book-item-info text-center text-black author fs-15">
                <span className='text-capitalize fw-7'>Author: {author_name}</span>
            </div>
            <div className='book-item-info-item edition-count text-center text-black fs-15'>
                <span className='text-capitalize fw-7'>Total Editions: {edition_count}</span>

            </div>
            <div className='book-item-info-item edition-count text-center text-black fs-15'>
                <span className='text-capitalize fw-7'>First Publication Year: {first_publish_year}</span>

            </div>
        </div>
    );
};

export default Book;