import React from 'react';
import { Products } from '../../ProductsData/Data';
import bedImage from '../Component/Assets/Images/bed.jpg';
import '../Css Files/Bed.css'
import { useNavigate } from 'react-router-dom';

function Bed() {

  const navigate=useNavigate()
  
  const bedProducts = Products.filter((product) => product.type === 'bed');

  
  const rows = [];
  for (let i = 0; i < bedProducts.length; i += 3) {
    rows.push(bedProducts.slice(i, i + 3));
  }

  return (
    <div className="bed-container">
      
      <img className="img-fluid col-xl-12 MainImg" src={bedImage} alt="Bedroom" />

    
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
  );
}

export default Bed;
