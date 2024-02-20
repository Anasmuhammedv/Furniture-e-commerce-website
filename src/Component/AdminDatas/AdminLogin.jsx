import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminLogin() {

    const navigate=useNavigate()
  
    const Admin={
        name    : "Admin",
        email   : "admin@gmail.com",
        password: 123456
    }
    const[email,setEmail]=useState("")
    const[passwords,setpasswords]=useState("")
    const[adminLogin,setAdminLogin]=useState([])

    const handleSubmit=(event)=>{
        event.preventDefault()
        if(Admin.email==email&&Admin.password==passwords){
            navigate('/AdminView')
            
        }
        else{
            alert("email or password is incorrect")
        }
         
         
    }
    console.log(email);
    console.log(passwords);
    
  
  return (
    <div className=''>
   <form  className='Login   d-flex flex-column 'onSubmit={handleSubmit}>
       <h1>Admin login</h1>
    
      <div className="form-outline mb-4  Email">
        <input type="email" id="form2Example1" className="form-control"  onChange={(e)=>setEmail(e.target.value)}/>
        <label className="form-label" htmlFor="form2Example1">Email address</label>
      </div>



      <div className="form-outline mb-4 Email">
        <input type="password" id="form2Example2" className="form-control" onChange={(e)=>setpasswords(e.target.value)}/>
        <label className="form-label" htmlFor="form2Example2">Password</label>
      </div>

     

      
      <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
    </form>
    </div>
  )
}

export default AdminLogin