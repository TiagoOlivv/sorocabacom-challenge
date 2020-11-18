import styled from "styled-components";

export const CarouselStyle = styled.div`
  height: 1000px;
  background-color: #363636;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 150px 50px;
`;

export const Card = styled.div`
  border-radius: 27px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  max-width: 327px;
  max-height: 613px;

  div {
    display: flex;
    border: 2px solid #fff;
    justify-content: center;
    align-items: center;
    border-radius: 70px;
    max-width: 300px;
    max-height: 350px;
    height: 100%;
    width: 100%;
    margin-top: -50px;
    background: #363636;

    img {
      margin-bottom: 85px;
      height: 450px;
      width: 280px;
    }
  }

  p {
    height: 153px;
    padding: 20px 25px 60px 25px;
    font-family: Open Sans, sans-serif;
    margin-bottom: 80px;
  }
`;
