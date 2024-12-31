import { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { authContextMake } from "../../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const { user, loading } = useContext(authContextMake)
    if (loading) {
        return <p className="text-7xl font-extrabold">Lodding.......</p>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={location.pathname} replace={true}></Navigate>
};

export default PrivateRoute;