import React from "react";
import Input from "./input";
import { useState } from "react";
import g8 from "./assets/g8.png";
import g9 from "./assets/g9.svg";
import "./App.css";
import Card from "./card";
import { location } from "./utils/cards";

function App() {
  const [titular, setTitular] = useState("");

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
          <section className="main-title">
            <span className="title1">FIND YOUR BLOCK</span>
            <h1>
              Encontre os{" "}
              <span className="melhoresBlocos"> melhores blocos</span> <br /> de
              carnaval de 2023
            </h1>

            <div className="campus">
              <Input
                type="text"
                id="nome-titular"
                placeholder="pesquise por nome"
                value={titular}
                onChange={(e) => setTitular(e.target.value)}
                maxLength={30}
              />
              <select className="select-city" name="select">
                <option value="valor1">Rio de Janeiro</option>
                <option value="valor2" selected>
                  São Paulo
                </option>
                <option value="valor3">Fortaleza</option>
                <option value="valor4">Curitiba</option>
                <option value="valor4">Salvador</option>
              </select>

              <button className="bucar-agora">BUSCAR AGORA</button>
            </div>
          </section>
        </header>
        <body>
          <nav className="nav">
            <h2>Blocos recomendados</h2>
            <div className="buttons-right">
              <button className="lista">LISTA</button>
              <button className="mapa">MAPA</button>
            </div>
          </nav>
          <div>
            <main className="countener-card">
              {location.map((item, index) => (
                <Card
                  key={index}
                  location={item.location}
                  title={item.title}
                  summary={item.summary}
                  img={item.img}
                />
              ))}
            </main>
          </div>
        </body>
      </div>
    </>
  );
}

export default App;
