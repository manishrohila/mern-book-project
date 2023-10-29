import React, { createContext, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth} from "firebase/auth";

import app from '../firebase/firebase.config';
export const AuthContext = createContext();
export const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading]=useState(true);

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email,password);
    }
    // const signUpWithGmail=()=>{
    //     return signInWith
    // }
    const authInfo={
        
    }
    
  return (
    <div>
      
    </div>
  )
}

export default AuthProvider
