import { useLoaderData } from "react-router-dom";
import notFoundImage  from '../../images/cover_not_found.jpg'
import "./BookDetails.css"
const BookDetails = () => {
    const loadBooksDetails = useLoaderData();

    const { description, title, subjects, subject_places, subject_times, covers } = loadBooksDetails;
    const imgCovers = covers[0];
    const url = imgCovers ? `https://covers.openlibrary.org/b/id/${imgCovers}-L.jpg` : notFoundImage;
    return (
        <section className='book-details text-black'>
            <div className='container'>
                <div className='book-details-content grid'>
                    <div className='book-details-img'>
                        <img src={url} alt="cover img" />
                    </div>
                    <div className='book-details-info'>
                        <div className='book-details-item title'>
                            <span className='fw-6 fs-24'>{title?title:"Title Not Found"}</span>
                        </div>
                        <div className='book-details-item description'>
                            <span>{description?description:"Description Not Found"}</span>
                        </div>
                        <div className='book-details-item'>
                            <span className='fw-6'>Subject Places: </span>
                            <span className='text-italic'>{subject_places?subject_places:"Subject Place Not Found"}</span>
                        </div>
                        <div className='book-details-item'>
                            <span className='fw-6'>Subject Times: </span>
                            <span className='text-italic'>{subject_times? subject_times:"Subject Times Not Found"}</span>
                        </div>
                        <div className='book-details-item'>
                            <span className='fw-6'>Subjects: </span>
                            <span>{subjects?subjects:"Subjects Not Found"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookDetails;