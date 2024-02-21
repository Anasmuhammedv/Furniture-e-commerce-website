
import React, { useContext, useState } from "react";
import { Globalcontext } from "./GlobalContext";
import Header from "./Header";
import Footer from "./Footer";

function Cart() {
  const [user, setUser] = useContext(Globalcontext);
  const [add, setAdd] = useState(0);

  const handleIncrement = (item) => {
    setAdd((item.qty += 1));
  };

  const handleDecrement = (item) => {
    if (item.qty && item.qty > 1) {
      setAdd((item.qty -= 1));
    }
  };

  const handleRemove = (id) => {
    setUser((prev) => ({
      ...prev,
      cart: prev.cart.filter((item) => item.id !== id),
    }));
  };

  return (
    <div>
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {user.cart.map((item, index) => (
              <div key={index} className=" mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-thumbnail"
                      width={"200px"}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.type}</h5>
                      <p className="card-text">Price: ${item.price}</p>
                      <p className="card-text">Quantity: {item.qty}</p>
                      <div className="btn-group" role="group" aria-label="Quantity">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={() => handleIncrement(item)}
                        >
                          +
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={() => handleDecrement(item)}
                        >
                          -
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => handleRemove(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-4">
            <h1>Sum Total</h1>
            {user.cart.map((item, index) => (
              <div key={index}>
                <h3>
                  {item.type}: ₹{item.price}
                </h3>
              </div>
            ))}
            <div>
              <h1>Total:</h1>
              <h1>
                {user.cart.reduce(
                  (acc, item) => (acc += item.price * item.qty),
                  0
                )}
              </h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              possimus nobis sequi hic fuga cupiditate eos ipsam? Nam voluptatem
              mollitia, illum nemo eum expedita possimus error eveniet a incidunt
              at?
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
