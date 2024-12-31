import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase';
import { GoogleAuthProvider } from "firebase/auth";
import axios from 'axios';
export const authContextMake = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)


    // account register korar jonno make kora hoyese
    const signUpCreate = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // account login korar jonno make kora hoyese
    const signInAccount = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // google diye login korar jonno 
    const googleSignin = () => {
        setloading(true)
        const googleProvider = new GoogleAuthProvider();
       return signInWithPopup(auth, googleProvider)
    }

    // logout korar jonno aita 
    const signOutAccount = async () => {
        setloading(true)
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/logout`, { withCredentials: true })
        console.log(data);
        return signOut(auth)
    }


    // update profile 
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }


    // current user dhore rakhar jonno 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentuser => {
            setuser(currentuser)
            console.log(currentuser);
            setloading(false)
        })
        return () => {
            return unSubscribe()
        }
    }, [])


    const sharedata = {
        user,
        loading,
        signUpCreate,
        signInAccount,
        signOutAccount,
        googleSignin,
        updateUserProfile,
    }
    return (
        <authContextMake.Provider value={sharedata}>
            {children}
        </authContextMake.Provider>
    );
};

export default AuthProvider;