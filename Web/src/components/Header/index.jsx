import { Container } from "./styles"
import logo from "../../assets/logo.png"


export function Header(){

  
  return(
    <Container>    
     <a href="/home"><img src={logo} alt="logo" className="logo" id="logo"/></a>
     <nav className="navbar">
      <ul className="navbar-items">
        <li><a href="/home">Home</a></li>
        <li><a href="/contact">Contato</a></li>
        <li><a href="/about">Sobre</a></li>
    
      </ul>
     </nav>
    </Container>
  )
}



