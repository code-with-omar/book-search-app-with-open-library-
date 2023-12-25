import { useRef } from 'react';
import './SearchForm.css';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const searchText = useRef('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTextValue = searchText.current.value.trim();
    if (searchTextValue) {
      navigate(`/books/${searchTextValue}`);
    } else {
      // Handle empty search term error or show a message to the user
      console.error('Please enter a search term');
    }
  };

  return (
    <div className='container'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='search-form-element flex flex-sb bg-white'>
          <input
            type='text'
            className='form-control'
            placeholder='The Lost World ...'
            ref={searchText}
          />
          <button type='submit' className='flex flex-c'>
            <FaSearch className=' bg-white' size={32} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
