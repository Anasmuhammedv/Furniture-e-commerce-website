import React from "react";
import { Products } from "../../ProductsData/Data";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Chair() {
  const navigate = useNavigate();
  const Table = Products.filter((product) => product.type === "chair");

  const rows = [];
  for (let i = 0; i < Table.length; i += 3) {
    rows.push(Table.slice(i, i + 3));
  }
  return (
    <div>
      <Header/>
      <div className="Table-container">
        <div className="mb-20px"></div>

        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((item, index) => (
              <div key={index} className="col-md-6">
                <div className="card">
                  <img
                    src={item.image}
                    className="img-fluid card-img-top"
                    alt="Bed"
                    onClick={() => navigate(`/${item.id}`)}
                  />

                  <div className="card-body">
                    <h1 className="card-title">{item.type}</h1>
                    <h1 className="card-price">₹{item.price}</h1>
                    <h5>{item.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Chair;
