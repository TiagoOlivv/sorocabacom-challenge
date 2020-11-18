import styled from "styled-components";
import backgroundImage from "./assets/Imagem-2.png";
import backgroundCard from "./assets/Imagem-card.svg";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #363636;

  img {
    margin-left: 30px;
  }

  strong {
    font: 22.5px Montserrat, sans-serif;
    color: #fff;
    font-weight: bold;
    letter-spacing: 0.68px;
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
    }

    img {
      background-position: center;
      box-shadow: 0px 3px 6px #00000099;
      border-radius: 196px;
      opacity: 1;
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

  form {
    max-width: 900px;
    max-height: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: 0px 0px 6px #0000004d;
    background-color: #fff;
    opacity: 1;

    h1 {
      padding-top: 80px;
      font: 46px Montserrat, sans-serif;
      color: #63c7a9;
    }

    span {
      margin-top: -60px;

      font: 21px Open Sans, sans-serif;
      letter-spacing: 0px;
      color: #363636;
      opacity: 1;
      padding: 120px;
      margin-bottom: -40px;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      input {
        border: 1px solid #363636;
        max-width: 269px;
        margin: 20px;
        padding: 15px;
      }
    }

    input {
      border: 1px solid #363636;
      max-width: 458px;
      width: 92%;
      outline: none;
      padding: 15px;
      padding-bottom: 80px;
    }

    button {
      border: none;
      width: 249px;
      height: 48px;
      background-color: #63c7a9;
      color: #fff;
      border-color: #fff;
      margin-top: 50px;
      margin-bottom: 130px;
      margin-right: 200px;

      transition: background-color 0.2s;

      &:hover {
        background-color: #4f9f87;
      }
    }
  }
`;
