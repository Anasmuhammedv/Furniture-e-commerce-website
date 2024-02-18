import React from 'react';
import { Products } from '../../ProductsData/Data';
import '../Css Files/Sofa.css'
import Image3 from '../Component/Assets/Images/Sofa.jpg'
import { useNavigate } from 'react-router-dom';


function Sofa() {
  const Table = Products.filter((product) => product.type === 'sofa');
  const navigate = useNavigate()

  
  const rows = [];
  for (let i = 0; i < Table.length; i += 3) {
    rows.push(Table.slice(i, i + 3));
  }



  return (
    <div> 
    <div className="Table-container">
       <div className='mb-20px'>
        
        <img className='sofa-main-img' src={Image3} alt="" />

       </div>
     

   
     {rows.map((row, rowIndex) => (
       <div key={rowIndex} className="row">
         {row.map((item, index) => (
           <div key={index} className="col-md-4">
             <div className="card">
               
               <img src={item.image} className="img-fluid card-img-top" alt="Bed" onClick={()=>navigate(`/${item.id}`)}/>

               
               <div className="card-body">
                 <h1 className="card-title">{item.type}</h1>
                 <h1 className="card-price">₹{item.price}</h1>
                 <h5>{item.title}</h5>

                 {/* <p>{item.description}</p> */}
                 {/* <button className="btn btn-primary">Add to Cart</button> */}
               </div>
             </div>
           </div>
         ))}
       </div>
     ))}
   </div>


   </div>
  );
}

export default Sofa;
