import React from "react";

import BackToTop from "../../components/backtotop";
import Carousel from "../../components/carousel";
import Form from "../../components/form";
import ScrollDown from "../../components/scrolldown";

import { Header, Main, Footer, Background } from "./styles";

import Logo from "../../assets/Imagem 3.png";
import mainCard from "../../assets/Imagem card-1.png";

const Home: React.FC = () => {
  return (
    <>
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
      <ScrollDown />
      <Carousel />
      <Background>
        <br />
        <Footer>
          <Form />
        </Footer>
        <BackToTop />
      </Background>
    </>
  );
};

export default Home;
