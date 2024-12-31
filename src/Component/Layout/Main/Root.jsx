import { Outlet } from 'react-router-dom';
import Navbar from '../../page/Navbar/Navbar';
import Footer from '../../page/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-306px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;