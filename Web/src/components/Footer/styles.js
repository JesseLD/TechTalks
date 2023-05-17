import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  width: 90vw;
  margin: 0 5vw;
  flex-direction: column;
  margin-top: 20px;
  font-size: 1.2rem;

  h2{
    text-transform: capitalize;
  }
  p{
    color: #777777;
  }
  .newsletter-cta{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    
  }
  .newsletter-text{
    margin-top: 15px;
    display: flex;
    flex-direction: column;
 
  }
  .footer-info{
    margin: 60px 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .logo{
    width: 230px;
  }
  .logo-text{
    max-width: 300px;
    text-transform: capitalize;
  }
  .footer-menu{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 50px;
  }
 
  h3{
    color:#777;
    font-weight: normal;
    margin-bottom: 15px;
    font-size: 1.2rem;
  }
  li{
    list-style: none;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all 100ms ease 0s;


  }
  li:hover{
    text-decoration: underline;
  }
  .info-line{
    margin: 50px 0;
    display: flex;
    justify-content: space-between;
  }
  .copy{
    color: black;
    font-weight: bold;
    cursor: pointer;

  }
  .icon{
    width: 25px;
    margin-right: 20px;
    cursor: pointer;
    transition: all 100ms ease 0s;

  }
  .icon:hover{
    transform: scale(1.1);
  }

  `