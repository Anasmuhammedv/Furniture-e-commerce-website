import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import { Products } from '../../ProductsData/Data';
import '../Css Files/ProductView.css';
import { Globalcontext } from './GlobalContext';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


function ProductView() {
    const [,,,,,,products,setProducts]=useContext(Globalcontext)


    const navigate=useNavigate()
    const[user,setUser,signup,setSignup,newUser,setNewUser]=useContext(Globalcontext)
    const { id } = useParams()


    useEffect(()=>{
        const filterProducts = products.find((item) => item.id == id)
        setNewUser(filterProducts)

    },[id,newUser])



    console.log(user);

   

       const handleClick=()=>{
        const exist = user.cart.some((item)=>item.id==newUser.id)

        if(!exist){
            user.cart.push({...newUser})
        }
       }

    return (

        <div>

    
            <Header/>
        <div className='Productview '>


            <img src={newUser.image} className='Product-img col-md-6 col-sm-12 ' alt="image not found" />

            <div className='details col-md-6 col-sm-12' >
                <h1 className='title'>{newUser.title}</h1>
                <h3 className='price'>₹{newUser.price}</h3>
                <h5 className='type'>{newUser.type}</h5>
                <p className='description'>{newUser.description}</p>
                <button onClick={user ? handleClick : ()=>navigate('/LoginForm')}>AddCart</button>

            </div>


        </div>
        <Footer/>
        </div>
    )
}

export default ProductView