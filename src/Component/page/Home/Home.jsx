import Carosul from './Carosul';
import TabCatagorices from './TabCatagorices';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const loadder = useLoaderData()
    console.log(loadder);
    return (
        <div>
            <Carosul></Carosul>
            <TabCatagorices></TabCatagorices>
        </div>
    );
};

export default Home;