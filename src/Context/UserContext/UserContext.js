import React, { createContext, useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState(null)
    const [addProduct, setAddProduct] = useState([])
    const [loading, setLoading] = useState(true);
    const createUser =(email, password)=>{
         return createUserWithEmailAndPassword(auth ,email, password);
    }
    const signInUser = (email, password) =>{
         return signInWithEmailAndPassword(auth, email, password)

    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, nUser =>{
            setUser(nUser);
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        }
    });
    const logOut=()=>{
        return signOut(auth);
    }
    const authInfo ={user,loading ,addProduct, setAddProduct, createUser, signInUser, logOut}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;