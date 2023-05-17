import { Header } from "../../components/Header"
import { Divider } from "../../components/Divider"
import { Mailbox } from "../../components/Mailbox"
import { Container } from "./styles"

import  Page2  from "../page2"

import {Route, Routes} from "react-router-dom"



export function Principal(){

  

  return(
  <>
    <Divider/>
    <Header/>

  <Routes>
    
    <Route path="/page2" Component={Page2}/>
  </Routes>


    <Container>
      <h1>Tecnologia Moldando o futuro</h1>
      <h3>Descubra as últimas inovações e tendências que estão transformando o mundo ao nosso redor</h3>
      <Mailbox/>
    </Container>

  </>
  )
}