import { Container } from "./styles"
import logo from "../../assets/logo.png"
import { IoMenuOutline } from "react-icons/io5";

export function Header(){

  
  return(
    <Container>    
     <a href="/home"><img src={logo} alt="logo" className="logo" id="logo"/></a>
     <nav className="navbar">
      <ul className="navbar-items">
        <li className="home"><a href="/home">Home</a></li>
        <li className="contact"><a href="/contact">Contato</a></li>
        <li className="about"><a href="/about">Sobre</a></li>
        <li className="burger-menu"><IoMenuOutline/></li>
    
      </ul>
     </nav>
    </Container>
  )
}



