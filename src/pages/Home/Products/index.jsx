import React, { useEffect, useState } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../redux/slices/productSlice";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header";
import { addToBasket } from "../../../redux/slices/basketSlice";
import tc from "../../../assets/tochka.svg";

function Products() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get(
        `https://664459266c6a6565870a0015.mockapi.io/all`
      );
      dispatch(getProduct(response.data));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
  };

  const handleAddToBasket = (product) => {
    dispatch(addToBasket(product));
  };

  const filteredData = data.filter((product) => {
    const matchesSearch = product.productName
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesBrand = selectedBrand
      ? product.productName.toLowerCase().includes(selectedBrand.toLowerCase())
      : true;
    return matchesSearch && matchesBrand;
  });

  return (
    <>
      <Header />
      <div className="container">
        <section id="search">
          <div className="search__block">
            <input
              type="text"
              placeholder="Поиск по названию..."
              value={searchQuery}
              onChange={handleInputChange}
            />
            <div className="search__btns">
              <div>
                <button onClick={() => handleBrandClick("Mazda")}>
                  <img src={tc} alt="Mazda" />
                  Mazda
                </button>
                <button onClick={() => handleBrandClick("Hyundai")}>
                  <img src={tc} alt="Hyundai" />
                  Hyundai
                </button>
                <button onClick={() => handleBrandClick("Opel")}>
                  <img src={tc} alt="Opel" />
                  Opel
                </button>
              </div>
              <div>
                <button onClick={() => handleBrandClick("Audi")}>
                  <img src={tc} alt="Audi" />
                  Audi
                </button>
                <button onClick={() => handleBrandClick("Ford")}>
                  <img src={tc} alt="Ford" />
                  Ford
                </button>
              </div>
              <div>
                <button onClick={() => handleBrandClick("Toyota")}>
                  <img src={tc} alt="Toyota" />
                  Toyota
                </button>
                <button onClick={() => handleBrandClick("Nissan")}>
                  <img src={tc} alt="Nissan" />
                  Nissan
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="sale--blocks">
          {filteredData.map((product) => (
            <div key={product.id} className="sale--blocks__big">
              <img src={product.image} alt={product.productName} />
              <div className="sale--blocks__big--one">
                <h3>{product.productName}</h3>
              </div>
              <div className="sale--blocks__big--mini">
                <div className="sale--blocks__big--mini__text">
                  <h3>
                    {product.price}
                    <span>с</span>
                  </h3>
                </div>
                <div className="sale--blocks__big--btn">
                  <button onClick={() => handleAddToBasket(product)}>
                    добавить в корзину
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
