import React, { useContext, useState } from 'react';
import '../Css Files/Login.css'
import { Link } from 'react-router-dom';
import { Globalcontext } from './GlobalContext';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const LoginForm = () => {

  const navigate=useNavigate()


  const[user,setUser,signup,setSignup]=useContext(Globalcontext)

  const[gmail,Setgmail]=useState('')
  const[passwordd,setPasswordd]=useState("")

  const handleSubmit=(e)=>{
    e.preventDefault()
    let userData=signup.find((item)=>item.email==gmail)
    if(userData&&userData.password==passwordd){
      setUser(userData)
      console.log(userData);
      navigate('/')

    }
    else{
      setUser(null)
      // setSignup("")
      alert("please make sure that password or email is correct")
    }
  }

  console.log(signup);
  console.log(passwordd);


  return (
    <div>

    
      <Header/>


      
    <form  className='Login   d-flex flex-column 'onSubmit={handleSubmit}>
      <h1 style={{textAlign:"center",fontFamily:"cursive"}}>LOGIN</h1>
      <div className="form-outline mb-4  Email">
        <input type="email" id="form2Example1" className="form-control" onChange={(e)=>Setgmail(e.target.value)} />
        <label className="form-label" htmlFor="form2Example1">Email address</label>
      </div>


      <div className="form-outline mb-4 Email">
        <input type="password" id="form2Example2" className="form-control" onChange={(e)=>setPasswordd(e.target.value)}/>
        <label className="form-label" htmlFor="form2Example2">Password</label>
      </div>


      <div className="row mb-4">
        <div className="col d-flex justify-content-center">

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="form2Example31" defaultChecked />
            <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
          </div>
        </div>

        <div className="col">

          <a href="#!">Forgot password?</a>
        </div>
      </div>


      <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>


      <div className="text-center">
        <p>Not a member? <Link to="/SignUp">Register</Link></p>
        <p>or sign up with:</p>
        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-facebook-f"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-google"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-twitter"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-github"></i>
        </button>
      </div>
    </form>
    <Footer/>
    </div>
  );
};

export default LoginForm;
