import React from 'react';
import { Products } from '../../ProductsData/Data';
import '../Css Files/Allproducts.css'
import { useNavigate } from 'react-router-dom';

function Allproducts() {
  const navigate=useNavigate()
  return (
    <div className='container'>
      {/* <h1 className='text-center mb-4'>This is home</h1> */}

      <div className='row'>
        {Products.map((item, index) => {
          return (
            <div key={index} className=' col-xl-2 col-lg-3 col-md-3 col-sm-6 col-12  mb-4 Allproducts'>
              <div className='card'>
                <img src={item.image} className='card-img-top' alt="Image missing" onClick={()=>navigate(`/${item.id}`)}/>
                <div className='card-title'>
                    <h3 className='card-title text-center'>{item.type}</h3>
                </div>
                <div >
                    <h2 className='card-title text-center'>₹{item.price}</h2>
                </div>
                <div className='card-body'>
                  <p className='card-title'>{item.title}</p>
                </div>
                
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Allproducts;
