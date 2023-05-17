// import { Header } from "../../components/Header"
// import { Divider } from "../../components/Divider"
import { Mailbox } from "../../components/Mailbox"
import { Container } from "./styles"

// import { Outlet } from "react-router-dom"

export function Home(){

  

  return(
  <>
  
    
    <Container>
      <h1>Tecnologia Moldando o futuro</h1>
      <h3>Descubra as últimas inovações e tendências que estão transformando o mundo ao nosso redor</h3>
      <Mailbox/>
    </Container>

  </>
  )
}