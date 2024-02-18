import { useState } from "react";
import { Globalcontext } from "./GlobalContext";


export const UserContextProvider = ({children})=>{
    const [user,setUser]=useState(null)
    const [signup,setSignup]=useState([])
    const[newUser,setNewUser]=useState([])

    return(
        <Globalcontext.Provider value={[
            user,setUser,
            signup,setSignup,
            newUser,setNewUser
            
        ]}>
            {children}

        </Globalcontext.Provider>
    )

}