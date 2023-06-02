import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  form{
    width: 600px;
    height: 80px;
    display: flex;
    flex-direction: row;
  }

  #email{
    width: 350px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    text-indent: 20px;
    margin-right: 10px;
    border: 1px solid black;
    outline: none;
    font-size: 1.1rem;

  }

  #email:hover{
    cursor: pointer;
  }
 
  #email:focus{
   
    outline: none;
  }

  #email::placeholder{
    font-size: 1.1rem;
  }
  @media (max-width:1023px){
    

  }
  @media (max-width: 768px) {
    form{
      width: 90vw;
      height: 180px;
      flex-direction: column;
      align-items: center;

    }
    input{
      margin: 15px 0;
    }
  }

  `