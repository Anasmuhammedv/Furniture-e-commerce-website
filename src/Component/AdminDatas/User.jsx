import React, { useContext } from 'react'
import { UserContextProvider } from '../UserContextProvider'
import { Globalcontext } from '../GlobalContext'
import AdminNavbar from './AdminNavbar';

function User() {
    const[user,setUser,signup,setSignup]=useContext(Globalcontext)
    console.log(user);
    console.log(signup);
  return (
    <div>
        <AdminNavbar/>
        <h1 style={{color:"orange"}}>User Datas.....</h1>
        
                   
                
        {signup.map((val)=>{
            return (
            
                 <>
                 
                 <h1>username:{val.name}</h1>
                 <h5>useremail:{val.email}</h5>
                 </>
             
                
            )
        })}

    </div>
  )
}

export default User