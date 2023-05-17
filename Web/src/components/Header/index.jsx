import { Container } from "./styles"
import logo from "../../assets/logo.png"



export function Header(){

  

  return(
    <Container>    
     <a href="/"><img src={logo} alt="logo" className="logo" id="logo"/></a>
     <nav className="navbar">
      <ul className="navbar-items">
        <li><a href="#">Home</a></li>
        <li><a href="#">Contato</a></li>
        <li><a href="#">Sobre</a></li>
        {/* <li><a href="/page2">Page2</a></li> */}
      </ul>
     </nav>
    </Container>
  )
}



