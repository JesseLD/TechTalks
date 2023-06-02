import styled from "styled-components";

export const Container = styled.header`

  max-width: 1920px;
  width: 90vw;
  height: 50px;
  margin: auto;
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  


.logo{
  width: 175px;
  height: 35px;
}
.burger-menu{
  display: none;

}
ul{
  display: flex;
  
}
li{
  list-style: none;
  padding: 0px 20px;
  font-size: 1.3rem;
  
}
a{
  text-decoration: none;
  color: #000;
}

@media (min-width: 1023px) {



}

@media (max-width: 768px){
  .home,.about,.contact{
    display: none;
  }
  .burger-menu{
    display: list-item;
    min-width: 20px;
    font-size: 7vw;
  }
}

`

