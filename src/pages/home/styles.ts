import styled from "styled-components";
import backgroundImage from "../../assets/Imagem-2.png";
import backgroundCard from "../../assets/Imagem-card.svg";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #363636;

  img {
    margin-left: 30px;
    @media (max-width: 800px) {
      margin-left: -30px;
    }
  }

  strong {
    font: 22.5px Montserrat, sans-serif;
    color: #fff;
    font-weight: bold;
    letter-spacing: 0.68px;
    @media (max-width: 800px) {
      font-size: 16px;
    }
  }
`;

export const Main = styled.main`
  background: url(${backgroundImage}) no-repeat;
  background-size: cover;

  div {
    display: grid;
    align-items: center;
    justify-content: center;
    background: url(${backgroundCard}) no-repeat center;

    strong {
      text-align: start;
      font: 18px Open Sans, sans-serif;
      letter-spacing: 0px;
      opacity: 1;
      margin: 18px 8px;
      font-weight: bold;
      color: #fff;
      @media (max-width: 800px) {
        font-size: 14px;
      }
    }

    img {
      background-position: center;
      border-radius: 196px;
      opacity: 1;
      @media (max-width: 800px) {
        margin-left: 10px;
        width: 95%;
      }
    }

    p {
      text-align: center;
      font: 20px Open Sans, sans-serif;
      letter-spacing: 0px;
      color: #f0f0f2;
      opacity: 1;
      margin: 10px 0px 26px;
    }
  }
`;

export const Background = styled.div`
  height: 1100px;
  background-color: #363636;
`;

export const Footer = styled.footer`
  margin-top: 150px;
  background-color: #7dede2;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
