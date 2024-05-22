import React from "react";
import "./index.scss";
import tc from "../../../assets/tochka.svg";

function Search() {
  return (
    <section id="search">
      <div className="container">
        <div className="search__block">
          <input type="text" placeholder="Поиск..." />
          <div className="search__btns">
            <div>
              <button>
                <img src={tc} alt="" />
                Mazda
              </button>
              <button>
                <img src={tc} alt="" />
                Hyundai
              </button>
              <button>
                <img src={tc} alt="" />
                Opel
              </button>
            </div>
            <div>
              <button>
                <img src={tc} alt="" />
                Audi
              </button>
              <button>
                <img src={tc} alt="" />
                Ford
              </button>
            </div>
            <div>
              <button>
                <img src={tc} alt="" />
                Toyota
              </button>
              <button>
                <img src={tc} alt="" />
                Nissan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Search;
