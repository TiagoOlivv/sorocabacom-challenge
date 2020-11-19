import styled from "styled-components";

export const FormStyle = styled.form`
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
  @media (max-width: 600px) {
    width: 100%;
    height: 140%;
  }

  h1 {
    padding-top: 80px;
    font: 46px Montserrat, sans-serif;
    color: #63c7a9;
    @media (max-width: 800px) {
      font: 32px Montserrat, sans-serif;
    }
  }

  span {
    margin-top: -60px;

    font: 21px Open Sans, sans-serif;
    letter-spacing: 0px;
    color: #363636;
    opacity: 1;
    padding: 120px;
    margin-bottom: -40px;
    @media (max-width: 800px) {
      margin-top: 20px;
      padding: 30px;
      font: 14px Open Sans, sans-serif;
    }
  }

  strong {
    font: 21px Open Sans, sans-serif;
    color: #c53030;
    @media (max-width: 800px) {
      margin-top: 20px;
      margin-bottom: -60px;
      font: 14px Open Sans, sans-serif;
    }
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
    @media (max-width: 600px) {
      flex: 1;
      flex-direction: column;
      position: relative;
      width: 90%;
      margin-bottom: -20%;
    }
  }

  input {
    border: 1px solid #363636;
    max-width: 458px;
    width: 92%;
    outline: none;
    padding: 15px;
    padding-bottom: 80px;
    @media (max-width: 600px) {
      width: 258px;

      margin-top: 20px;
    }
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
    margin-right: 210px;

    transition: background-color 0.2s;

    &:hover {
      background-color: #4f9f87;
    }
    @media (max-width: 600px) {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: -20px 92px -20px 92px;
    }
  }
`;
