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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nisi fuga at atque, eius, sint necessitatibus reprehenderit, animi exercitationem ex distinctio commodi veniam enim architecto ullam maxime explicabo quisquam earum!
                        </p>
                        <SearchForm></SearchForm>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default Header;