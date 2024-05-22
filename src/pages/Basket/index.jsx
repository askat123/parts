import React, { useEffect, useState } from "react";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromBasket,
  decreaseQuantity,
  increaseQuantity,
  clearBasket,
} from "../../redux/slices/basketSlice";
import { Modal, Input, Button } from "antd";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Basket() {
  const basket = useSelector((state) => state.basket.products);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({
      ...customerInfo,
      [name]: value,
    });
  };
  function removeBasket() {
    clearBasket();
  }

  const handleDecreaseQuantity = (product) => {
    dispatch(decreaseQuantity(product));
  };

  const handleIncreaseQuantity = (product) => {
    dispatch(increaseQuantity(product));
  };

  const handleRemoveFromBasket = (product) => {
    dispatch(removeFromBasket(product));
  };

  const handleOrder = () => {
    setModalVisible(true);
  };

  const handleModalOk = async () => {
    try {
      if (customerInfo.name && customerInfo.phone) {
        const response = await axios.post(
          "https://api.telegram.org/bot6149981925:AAGpfDoRJkhemNLd2KfEYJGMYADcgZ_Dp5w/sendMessage",
          {
            chat_id: "-4288695649",
            text: `Новый заказ:\n\n${basket
              .map(
                (product) =>
                  `Название: ${product.name}\nКоличество: ${product.quantity}\nЦена: ${product.price}\n\n`
              )
              .join("")}\nИмя заказчика: ${
              customerInfo.name
            }\nНомер телефона: ${customerInfo.phone}`,
          }
        );
        console.log("Order sent:", response.data);
        basket.forEach((product) => dispatch(removeFromBasket(product)));
        setCustomerInfo({
          name: "",
          phone: "",
        });
        alert("Заказ успешно отправлен!");
        setModalVisible(false);
      } else {
        alert("Пожалуйста, заполните данные заказчика.");
      }
    } catch (error) {
      console.error("Error sending order:", error);
    }
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div id="basket">
        <div className="container">
          <div className="basket__box">
            <div className="total">
              <div className="total-block">
                Итого к оплате:
                <h1>
                  {basket.reduce((acc, el) => acc + +el.price * el.quantity, 0)}
                  {" сом"}
                </h1>
              </div>
            </div>
            {basket.map((product) => (
              <div className="basket__block" key={product.id}>
                <img src={product.image} alt="img" />
                <h2>{product.name}</h2>
                <div className="qua">
                  <button onClick={() => handleDecreaseQuantity(product)}>
                    -
                  </button>
                  <h3>{product.quantity}</h3>
                  <button onClick={() => handleIncreaseQuantity(product)}>
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemoveFromBasket(product)}
                  className="remove-button"
                  style={{
                    padding: "6px 10px",
                    background: "black",
                    color: "white",
                    borderRadius: "5px",
                  }}
                >
                  удалить
                </button>
              </div>
            ))}
          </div>
          <button onClick={handleOrder} className="order-button">
            Потдвердить заказ
          </button>
          <button
            onClick={() => dispatch(clearBasket())}
            className="order-button-rem"
          >
            - Очистить корзину{" "}
          </button>
        </div>
      </div>

      <Footer />
      <Modal
        title="Пожалуйста, введите ваши данные"
        visible={modalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        okText="Оформить заказ"
        cancelText="Отмена"
      >
        <Input
          placeholder="Ваше имя"
          name="name"
          value={customerInfo.name}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Ваш номер телефона"
          name="phone"
          value={customerInfo.phone}
          onChange={handleInputChange}
        />
      </Modal>
    </>
  );
}

export default Basket;
