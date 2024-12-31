import axios from "axios";
import useAuth from "../Hook/useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})

const useAxiosSecure = () => {
    const { signOutAccount } = useAuth()
    const navigate = useNavigate()
    axiosSecure.interceptors.response.use(res => {
        console.log("app a asar agei dekhailam ", res);
        return res
    },
        async error => {
            console.log(error.response);
            if (error.response.status === 401 || error.response.status === 403) {
                await signOutAccount()
                navigate('/login')

            }
            return Promise.reject(error)
        }
    )
    return axiosSecure;
};

export default useAxiosSecure;