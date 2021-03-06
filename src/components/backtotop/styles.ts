import styled from "styled-components";

export const BackToTopStyle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  svg {
    color: #c0c0c0;
    position: fixed;
    width: 200px;
    bottom: 60px;
    cursor: pointer;
    animation: fadeIn 0.3s;
    transition: opacity 0.4s;
    opacity: 0.8;
  }
`;
