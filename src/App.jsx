import React from "react";
import g8 from "./assets/g8.png";
import g9 from "./assets/g9.svg";
import "./App.css";
import Card from "./card";

function App() {
  return (
    <>
      <div className="background">
        <header className="head">
          <div className="left-img">
            <img src={g8} />
          </div>
          <div className="rigth-img">
            <img src={g9} />
          </div>
          <div className="main-title">
            <span className="title1">FIND YOUR BLOCK</span>
            <h1>
              Encontre os{" "}
              <span className="melhoresBlocos"> melhores blocos</span> <br /> de
              carnaval de 2023
            </h1>
          </div>
          <div className="campus">
            <input type="text" placeholder="pesquise por nome" />
            <input
              type="search"
              name=""
              id=""
              placeholder="Selecione sua cidade"
            />
            <button className="bucar-agora">BUSCAR AGORA</button>
          </div>
        </header>
        <body>
          <nav className="nav">
            <h2>Blocos recomendados</h2>
            <div className= "buttons-right">
              <button className="lista">LISTA</button>
              <button className="mapa">MAPA</button>
            </div>
          </nav>
          <div>
            <main>
              <Card/>
              
            </main>
          </div>
        </body>
      </div>
    </>
  );
}

export default App;
