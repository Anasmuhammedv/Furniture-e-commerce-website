import { useState } from "react";
import { useParams } from "react-router-dom";
import { Products } from "../../ProductsData/Data";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Search() {
  const navigate = useNavigate();
  const { term } = useParams();
  const [filterData, setFilterData] = useState([]);
  console.log("term data", term);

  useEffect(() => {
    const filterData = () => {
      const Data = Products.filter((items) =>items.title.toLowerCase().includes(term.toLowerCase()) ||items.type.toLowerCase().includes(term.toLowerCase()));
      setFilterData(Data);

      console.log(Data);
    };
    filterData();
  }, [term, setFilterData]);

  return (
    <div>

      <Header/>

    <div className="container mt-4">
      <div className="row">
        {filterData.map((product, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                onClick={()=>navigate(`/${product.id}`)}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: ${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Search;
