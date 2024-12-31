import { useContext } from 'react';
import { authContextMake } from '../../Provider/AuthProvider';

const useAuth = () => {
    const auth = useContext(authContextMake)
    return auth
};

export default useAuth;