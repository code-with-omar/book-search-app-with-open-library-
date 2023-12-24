
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './Home.css'
const Home = () => {
    return (
       <main>
        <Header></Header>
        <Outlet></Outlet>
       </main>
    );
};

export default Home;