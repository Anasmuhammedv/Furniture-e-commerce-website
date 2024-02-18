import React, { useContext, useState } from 'react';
import { Globalcontext } from './GlobalContext';
import { Products } from '../../ProductsData/Data';

function Cart() {
    const [user,setUser] = useContext(Globalcontext);
    const[add,setAdd]=useState(0)

    if (!user || !user.cart || user.cart.length === 0) {
        return <div className="empty-cart">Your cart is empty</div>;
    }
    const handleIncrement=(item)=>{
      setAdd((item.qty += 1))
      
    }
    const handleDecrement=(item)=>{
      if(item.qty && item.qty > 1){
        setAdd((item.qty -= 1))
      }
    }

    const handleRemove=(id)=>{
     

      setUser(prev=>({
        ...prev,
        cart:prev.cart.filter(item=>item.id !== id)
      }))
    }

    return (
        <div className="container d-flex flex-row ">
          <div className='row col-md-6'>



            {user.cart.map((item, index) => {
                return (
                    <div key={index} className="">
                        <div className="col-md-4">
                            <div className="card   d-flex flex-row align-items-start">
                                <img src={item.image} alt={item.name} className="img-thumbnail" width={'200px'} />
                                <div className="card-body d-flex flex-column justify-content-end">
                                    <div>
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">Price: ${item.price}</p>
                                        <p className="card-text">Quantity: {item.qty}</p>
                                    </div>
                                    <div className=" mt-30px">
                                        <div className="btn-group" role="group" aria-label="Quantity">
                                            <button type="button" className="btn btn-secondary" onClick={()=>handleIncrement(item)}>+</button>
                                            <button type="button" className="btn btn-secondary " onClick={()=>handleDecrement(item)}>-</button>
                                            <button type="button" className="btn btn-danger" onClick={()=>handleRemove(item.id)}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                );
            })}
            </div>
            <div className=''>
              <h1>sum Total</h1>
              <div>

              {user.cart.map((item,index)=>{
                return(
                  <table>
                    <tr>

                      <td> 
                         <h3>{item.type}:  ₹{item.price}</h3>



                      </td>
                    </tr>
                    
                        </table>
                      
                      
                      
                      
                      
                      )
                    })}
                    </div>

                    <div>
                     <h1> Total:{" "}</h1>
                                       
                      
                     <h1>{user.cart.reduce(
                        (acc,item)=>(acc+=item.price * item.qty),0
                      )}</h1> 
                    </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores possimus nobis sequi hic fuga cupiditate eos ipsam? Nam voluptatem mollitia, illum nemo eum expedita possimus error eveniet a incidunt at?</p>
            </div>
        </div>
    );
}

export default Cart;
