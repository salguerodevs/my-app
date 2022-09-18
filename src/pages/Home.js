import React from "react";
import camp0 from "../img/camp0.png";
import camp1 from "../img/camp1.png";
import camp2 from "../img/camp2.png";
import camp3 from "../img/camp3.png";
import camp4 from "../img/camp4.png";
import camp5 from "../img/camp5.png";
import Contador from "../components/Contador";

const Home = () => {
  return (
    <div className="contenedor">
      <h1>MEDIAFOX360 | CATALOGO DE PRODUCTOS 2022</h1>
      <Contador />
      <div className="prod">
        <div className="cards">
          <img src={camp0} alt="TSHIRT JURASSIK" />
          <div className="d1">
            <h2>TSHIRT JURASSIK</h2>
            <p>PRECIO: US$12.00</p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button">COMPRAR AHORA</button>
            </a>
          </div>
        </div>

        <div className="cards">
          <img src={camp1} alt="EVOLUTION 2" />
          <div className="d2">
            <h2>EVOLUTION 2</h2>
            <p>PRECIO: US$12.00</p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button">COMPRAR AHORA</button>
            </a>
          </div>
        </div>
        <div className="cards">
          <img src={camp2} alt="CAMP CRETACEO" />
          <div className="d3">
            <h2>CAMP CRETACEO</h2>
            <p>PRECIO: US$12.00</p>
            <a
              className="App-link"
              href="https://blogdemia.company.site/products/CAMP-CRETACEOUS-1-p398579142"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button">COMPRAR AHORA</button>
            </a>
          </div>
        </div>
        <div className="cards">
          <img src={camp3} alt="T-SHIRT MESSI" />
          <div className="d4">
            <h2>T-SHIRT MESSI</h2>
            <p>PRECIO: US$12.00</p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button">COMPRAR AHORA</button>
            </a>
          </div>
        </div>
        <div className="cards">
          <img src={camp4} alt="T-SHIRT NAYIB" />
          <div className="d5">
            <h2>T-SHIRT NAYIB</h2>
            <p>PRECIO: US$12.00</p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button">COMPRAR AHORA</button>
            </a>
          </div>
        </div>
        <div className="cards">
          <img src={camp5} alt="HARLEY QUINN" />
          <div className="d6">
            <h2>HARLEY QUINN</h2>
            <p>PRECIO: US$12.00</p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button">COMPRAR AHORA</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
