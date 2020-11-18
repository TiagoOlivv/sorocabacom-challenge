import React from "react";

import Carousel from "./components/Carousel";

import GlobalStyle from "./styles/global";

import { Header, Main, Footer, Background } from "./styles";

import Logo from "./assets/Imagem 3.png";
import mainCard from "./assets/Imagem card-1.png";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header>
        <img src={Logo} alt="Logo" />
        <strong>SUPERGIANTGAMES</strong>
      </Header>
      <Main>
        <div>
          <strong>TRANSISTOR - RED THE SINGER</strong>
          <img src={mainCard} alt="mainCard" />
          <p>
            "Olha, o que quer que você
            <br />
            esteja pensando, me faça
            <br />
            um favor, não solte."
          </p>
        </div>
      </Main>
      <Carousel />
      <Background>
        <br />
        <Footer>
          <form>
            <h1>FORMULÁRIO</h1>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </span>
            <div>
              <input type="text" placeholder="Nome" />
              <input type="email" placeholder="Email" />
            </div>
            <input type="text-area" placeholder="Mensagem" />
            <div>
              <button type="submit">Enviar</button>
            </div>
          </form>
        </Footer>
      </Background>
    </>
  );
};

export default App;
