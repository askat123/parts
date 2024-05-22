import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../../components/Header";
import "./index.scss";
import basketlogo from "../../../assets/basket.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../../redux/slices/basketSlice";
import Footer from "../../../components/Footer";

function PartDetail() {
  const { partId } = useParams(); // Извлекаем значение параметра из URL
  const [partDetail, setPartDetail] = useState(null);
  const basket = useSelector((s) => s.basket.products);
  const dispatch = useDispatch();

  const handleAddToBasket = (product) => {
    dispatch(addToBasket(product));
  };
  console.log(useParams());
  useEffect(() => {
    const fetchPartDetail = async () => {
      try {
        const response = await axios.get(
          `https://autoshop.pythonanywhere.com/spare/category/${partId}`
        );
        setPartDetail(response.data);
      } catch (error) {
        console.error("Error fetching part detail:", error);
      }
    };
    fetchPartDetail();
    window.scrollTo(0, 0);
  }, [partId]);

  return (
    <>
      <Header />
      <section id="part">
        <div className="container">
          <div className="fixed_basket">
            <img src={basketlogo} alt="" />
            <p>в корзине: {basket.length} шт.</p>
          </div>
          <div className="part__box">
            {partDetail &&
              partDetail.parts.map((el) => (
                <div className="part__block">
                  <img src={el.image} alt="" />
                  <h2>{el.name}</h2>
                  <p>{el.description && el.description.slice(0, 65)}</p>
                  <h1>{el.price}</h1>
                  <button onClick={() => handleAddToBasket(el)}>
                    добавить в корзину
                  </button>
                </div>
              ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default PartDetail;
