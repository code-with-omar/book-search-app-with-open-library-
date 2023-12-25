import Navbar from '../Navbar/Navbar';
import SearchForm from '../SearchForm/SearchForm';

import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="holder">
                <header className='header'>
                    <Navbar></Navbar>
                    <div className='header-content flex flex-c text-center text-white'>
                        <h2 className='header-title'>Find your book of choice</h2>
                        <p className="header-text fs-18">
                        A book, a doorway to countless worlds, encapsulates stories, knowledge, and imagination. It weaves intricate tales, educates, and transports readers to unexplored realms, offering solace, inspiration, and wisdom within its pages. Each book holds the power to ignite minds and evoke emotions, leaving an indelible mark on its readers soul.
                        </p>
                        <SearchForm></SearchForm>
                    </div>
                </header>
            </div>
            
        </div>
    );
};

export default Header;