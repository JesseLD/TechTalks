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
    margin: 20px 0;
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
  .icon-container{
    display: flex;
    flex-direction: row;
  }

  .icon{
    /* width: 45px; */
    /* display: block; */
    font-size: 40px;
    margin-right: 20px;
    cursor: pointer;
    transition: all 100ms ease 0s;

  }
  .icon:hover{
    transform: scale(1.1);
  }
  @media (max-width:1023px){
    margin: auto;
    margin-top: 10px;
    background-color: red;
  
    .newsletter-cta{
      flex-direction: column;
      align-items: center;
      h2,p{
        margin: 15px 0;
      }
      
    }
    .icon{
      font-size: 25px;
    }
    .footer-info{
      display: flex;
      flex-direction: column;
      align-items: center;
      
    }
    .logo-and-text{
      display: flex;
      flex-direction: column;
      align-items: center;
      img{
        margin: 15px 0;
      }
    }
    .footer-menu{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      padding: 10px;
      max-width: 90vw;
      width: 100%;
      place-items: center;
      
      gap: 15px;
      margin-top: 25px;
    }
   
    .info-line{
      flex-direction: column;
      text-align: center;
      align-items: center;
      gap: 10px;
      margin: 0;
    }

  }
  @media (max-width: 768px) {
    .newsletter-cta{
      flex-direction: column;
      align-items: center;
      h2,p{
        margin: 15px 0;
      }
    }
    .icon{
      font-size: 25px;
    }
    .footer-info{
      display: flex;
      flex-direction: column;
      align-items: center;

    }
    .logo-and-text{
      display: flex;
      flex-direction: column;
      align-items: center;
      img{
        margin: 15px 0;
      }
    }
    .footer-menu{
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      max-width: 90vw;
      width: 100%;
      place-items: center;
      gap: 15px;
      margin-top: 25px;
    }
    .legal{
      position: relative;
      left: calc(50% + 5vw);
      text-align: center;
      /* transform: translateX(-50%); */
    }
    .info-line{
      flex-direction: column;
      text-align: center;
      align-items: center;
      gap: 10px;
    }

  }

  `