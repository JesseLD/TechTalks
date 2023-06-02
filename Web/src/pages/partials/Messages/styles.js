import styled from "styled-components";

export const Container = styled.div`
width: 100%;
text-align: center;
margin: 30px auto;
text-transform: initial;

div{
  transition: all 150ms 0s ease;
  padding: 10px;
}
div:hover{
  cursor: pointer;
  filter: brightness(0.9);
}

.success{
  background-color: #18b13a33;
  color: #0a4b18;
}
.warning{
  background-color: #99630033;
  color: #664200;

}
.error{
  background-color: #7f000033;
  color: #4c0000;

}

`