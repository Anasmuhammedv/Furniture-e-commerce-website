import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Css Files/SignUp.css'
import { UserContextProvider } from './UserContextProvider';
import { Globalcontext } from './GlobalContext';
import { useNavigate } from 'react-router-dom';
import Cart from './Cart';

const SignUpSection = () => {

  const navigate=useNavigate()

  const [user,setUser,signup,setSignup,newUser,setNewUser]=useContext(Globalcontext)
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')


  // console.log(password);

  // useEffect(()=>{
  //   console.log(signup);
  // },[signup])

  
  const handleSubmit=(e)=>{
    e.preventDefault()
    const User={email,password,name,cart:[]}
    setSignup([...signup,User]);
    // setNewUser([...newUser,User])

    navigate('/Loginform')


    

  }
  // console.log("this is signup",signup);
    // console.log("this is newuser",newUser);


  return (
    <section className="text-center Signup">
      
        <div className="card-body py-5 px-md-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-5">Sign up now</h2>



              <form onSubmit={handleSubmit}>
                {/* 2 column grid layout with text inputs for the first and last names */}
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1" className="form-control" onChange={(e)=>setName(e.target.value)}/>
                      <label className="form-label" htmlFor="form3Example1">First name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example2" className="form-control" />
                      <label className="form-label" htmlFor="form3Example2">Last name</label>
                    </div>
                  </div>
                </div>

                {/* Email input */}
                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3" className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
                  <label className="form-label" htmlFor="form3Example3">Email address</label>
                </div>

                {/* Password input */}
                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4" className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
                  <label className="form-label" htmlFor="form3Example4">Password</label>
                </div>

                {/* Checkbox */}
                <div className="form-check d-flex justify-content-center mb-4">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" defaultChecked />
                  <label className="form-check-label" htmlFor="form2Example33">
                    Subscribe to our newsletter
                  </label>
                </div>

                {/* Submit button */}
                <button  className="btn btn-primary btn-block mb-4">
                  Sign up
                </button>


                {/* Register buttons */}
                <div className="text-center">
                    <p>already have account <Link to="/LoginForm">Login</Link></p>
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
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default SignUpSection;
