import styled from "styled-components";

export const Container = styled.div`
  max-width: 90vw;
  width: 100%;
  padding: 0 5vw;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 30px 0 80px 0;
  margin-top: 50px;
  font-size: 1.3rem;
  

  Button{
    align-self: center;
    margin: 30px 0 0 0;
  }

  .form{
    display: flex;
    flex-flow: column;
    justify-content: center;
    max-width: 500px;
    width: 100%;
  }

  label{
    margin:0 0 5px 0;
  }
  input,textarea{
    margin: 0 0 25px 0;
    padding: 15px;
    border-radius: 5px;
    border: 1px solid #999;
    outline: none;
    transition: all 150ms ease 0s;
    box-shadow: 0px 5px 20px #00000033;
    font-size: 1.1rem;
    
  }
  /* input::placeholder,textarea::placeholder{

  } */
  input:focus,textarea:focus,input:hover,textarea:hover{
    cursor: pointer;
    filter: brightness(0.96);

  }
  
  `