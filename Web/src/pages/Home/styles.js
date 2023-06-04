import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    font-size: max(44px,5vw);
    max-width: 1200px;
  }
  h3{
    max-width: 960px;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 60px;
    font-size: max(22px,2vw);
    font-weight: lighter;
    color: #777777;
  }
  @media (max-width:1023px){}
  @media (max-width:767px){
   
  }
  
  `