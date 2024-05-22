import React from "react";
import Header from "../../components/Header";
import "./index.scss";
import Products from "./Products";
import Footer from "../../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import one from "../../assets/b49fff8a2abc3409ae935f4b05d8dd8c-removebg-preview.png";
import two from "../../assets/57a347acd5fc70b5008569b9c17b2342-removebg-preview.png";
import three from "../../assets/d95cd04d85043401df2b957eeba934cd-removebg-preview.png";
import rest from "../../assets/Снимок экрана (156).png";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    arrows: false,
    swipe: false,
    pauseOnHover: false,
  };
  return (
    <>
      <Header />
      <div id="home">
        <div className="container">
          <div className="slider-container">
            <Slider {...settings}>
              <div className="swiper-slide">
                <div className="box">
                  <img src={one} alt="" />
                  <h3>
                    Широкий <br /> ассортимент <b>автозапчастей</b>
                  </h3>
                </div>
              </div>
              <div className="swiper-slidee">
                <img src={rest} alt="" />
              </div>
              <div className="swiper-slide">
                <div className="box">
                  <img className="twoimg" src={two} alt="" />
                  <h3>
                    Доставка по регионам <br /> ассортимент{" "}
                    <b>КР, а также в РК и РФ (ТК).</b>
                  </h3>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="box">
                  <h3>
                    Двигатели с <br />
                    <b>минимальными пробегами </b>
                  </h3>
                  <img src={three} alt="" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <center>
        <h1
          style={{
            fontFamily: "sans-serif",
            fontSize: "28px",
            padding: "50px 0",
          }}
        >
          Поиск автозапчастей
        </h1>
      </center>
      <Products />
      <div className="container">
        <center>
          <p style={{ padding: "50px 0" }}>
            Магазин автозапчастей "AutoDNR"  <br /> <br />   Наша компания,
            занимается розничной продажей запчастей, расходных материалов,
            аксессуаров и <br /> <br />
            комплектующих для автомобилей. В нашем ассортименте продукция
            ведущих европейских, корейских, японских марок, а так же большой
            выбор неоригинальных автомобильных запчастей. <br /> <br />     Мы
            предлагаем быстрый и удобный сервис по поиску, подбору и заказу
            необходимых вам запчастей, оптимальную систему скидок и максимально
            короткие сроки доставки. Администрация ОсОО "AutoDNR" <br /> <br />
          </p>
        </center>
      </div>
      <Footer />
    </>
  );
}

export default Home;
