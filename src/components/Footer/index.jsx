import React from "react";
import logsf from "../../assets/inst.svg";
import logo from "../../assets/logoautodnr-removebg-preview.png";
import "./index.scss";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer_box">
            <div className="footer_text">
              <h3>Клиентам</h3>
              <a href="">Пользовательское соглашение</a>
            </div>
            <div className="footer_text">
              <h3>О компании</h3>
              <a href="https://api.whatsapp.com/send?phone=996500084707">
                Контакты
              </a>
              <a href="">О нас</a>
            </div>
          </div>
          <img className="logo" src={logo} alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
