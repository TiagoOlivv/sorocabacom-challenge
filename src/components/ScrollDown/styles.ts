import styled from "styled-components";

export const Container = styled.div`
  text-align: center;

  svg {
    color: #ffffff;
    position: fixed;
    width: 100%;
    bottom: 20px;
    align-items: center;
    height: 20px;
    justify-content: center;
    z-index: 1000;
    cursor: pointer;
    animation: fadeIn 0.3s;
    transition: opacity 0.4s;
    opacity: 0.5;
  }
`;
