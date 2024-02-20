import { useState } from "react";
import { Globalcontext } from "./GlobalContext";
import { Products } from "../../ProductsData/Data";


export const UserContextProvider = ({children})=>{
    const [user,setUser]=useState(null)
    const [signup,setSignup]=useState([])
    const[newUser,setNewUser]=useState([])
    const[products,setProducts]=useState(Products)

    return(
        <Globalcontext.Provider value={[
            user,setUser,
            signup,setSignup,
            newUser,setNewUser,
            products,setProducts
            
        ]}>
            {children}

        </Globalcontext.Provider>
    )

}