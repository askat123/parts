import React from "react";
import "./index.scss";
import basket from "../../assets/basket.svg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../assets/logoautodnr-removebg-preview.png";

function Header() {
  const baskets = useSelector((s) => s.basket.products);
  console.log(baskets);
  return (
    <>
      <header>
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <NavLink to={"/"}>
                <img src={logo} alt="" />
              </NavLink>
            </div>
            <p>ИНТЕРНЕТ-МАГАЗИН Б/У АВТОЗАПЧАСТЕЙ В КЫРГЫЗСТАНЕ</p>
            <div className="buttons">
              <nav>
                <a href="https://api.whatsapp.com/send?phone=996500084707">
                  Контакты
                </a>
                <NavLink to={"/category"}>Категории</NavLink>
              </nav>
              <NavLink to={"/basket"}>
                <img src={basket} alt="" />
              </NavLink>
              <span>{baskets.length}</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
