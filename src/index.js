import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const elemento = <h3> Bem Vindo ao Nosso Desafio by Blog do Marcio </h3>;

function App() {
  const [i, setI] = useState(1);

  const somar = () => {
    setI(i + 1);
  };

  const menos = () => {
    setI(i - 1);
  };

  // ENTRADA, RODANDO E FIM

  const [estado, setEstado] = useState("ENTRADA");

  // PALPITE

  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setNumPalpites(1);
    setPalpite(150);
  };

  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}> Começar a Jogar </button>;
  }

  if (estado === "ACERTOU") {
    return (
      <div>
        <h3>Final de Jogo</h3>
        Seu numero é {palpite}
        <br />
        Teve {numPalpites} tentativas!
        <br /> <br />
        <button onClick={iniciarJogo}> Jogar Novamente </button>
      </div>
    );
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("ACERTOU");
  };

  return (
    <div className="App">
      <h3>{elemento}</h3>

      <br />

      <p>Seu número de palpite é {palpite} </p>
      <p>
        {" "}
        Min: {min} / Max: {max}{" "}
      </p>

      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou</button>
      <button onClick={maior}>Maior</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
