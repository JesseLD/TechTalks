import styled from "styled-components";

export const Container = styled.button`
  width: 230px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  font-size: 1.2rem;
  background-color: #000;
  color: #fff;
  transition: all 150ms 0s;
  border-radius: 5px;
  border: none;
  outline: none;

  :hover{
    filter: brightness(1.4);
    transform: scale(1.02);
    background-color: #111;
    
  }
  `