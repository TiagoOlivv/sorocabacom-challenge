import React from "react";

import GlobalStyle from "./styles/global";
import { Header, Section, Main } from "./styles/styles";

import Logo from "./assets/Imagem 3.png";
import Card from "./assets/Imagem card-1.png";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header>
        <img src={Logo} alt="Logo" />
        <strong>SUPERGIANTGAMES</strong>
      </Header>
      <Section>
        <div>
          <strong>TRANSISTOR - RED THE SINGER</strong>
          <img src={Card} alt="Card" />
          <p>
            "Olha, o que quer que você
            <br />
            esteja pensando, me faça
            <br />
            um favor, não solte."
          </p>
        </div>
      </Section>
      <Main></Main>
    </>
  );
};

export default App;
