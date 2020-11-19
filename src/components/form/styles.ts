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

  strong {
    font: 21px Open Sans, sans-serif;
    color: #c53030;
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
    margin-right: 210px;

    transition: background-color 0.2s;

    &:hover {
      background-color: #4f9f87;
    }
  }
`;
