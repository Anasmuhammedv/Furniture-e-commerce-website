import React, { useContext } from 'react';
import { Products } from '../../../ProductsData/Data';
import AdminNavbar from './AdminNavbar';
import { useNavigate } from 'react-router-dom';
import { Globalcontext } from '../GlobalContext';
import { FaEdit } from "react-icons/fa";
import { CiSquareRemove } from "react-icons/ci";

function AdminView() {
  const navigate=useNavigate()
  const [,,,,,,products,setProducts]=useContext(Globalcontext)

  const handleRemove=(id)=>{
    setProducts((prev) => (
    
       prev.filter((item) => item.id !== id)
    ));
  };
  

  return (
    <div> 
      <AdminNavbar/>
      <h1 style={{textAlign:"center", margin:"20px"}}>PRODUCTS</h1>
      <div className='bg-secondary' style={{ padding:"30px"}}>

      {products.map((item, index) => (
        <div key={index} className='card-container d-flex flex-row justify-content-between align-items-center bg-light rounded-3' style={{margin:"20px", padding:"10px"}}>
          <div className=' d-flex flex-row  '>
            {/* Adjust the width and height of the image using inline styles */}
            <img className='img-thumbnail' src={item.image} alt="Image not found" style={{ width: '200px', height: '200px' }} />
            <div className='d-flex flex-column justify-content-center' style={{marginLeft:"15px"}}>
            <h4>{item.title}</h4><br />

            <h3 className='card-title align-items-center'>{item.type} {" "} ₹: {item.price}</h3>
            </div>
          </div>
          <div className='justify-content-center ' style={{marginRight:"10px"}}>
            <button className='align-item-center justify-content-center' onClick={()=>navigate(`/AdminProducyEdit/ ${item.id}`)}><FaEdit /></button>
            {' '}
            <button onClick={()=>handleRemove(item.id)}><CiSquareRemove /></button>
          </div>
        </div>
      ))}

      </div>
    </div>
  );
}

export default AdminView;
