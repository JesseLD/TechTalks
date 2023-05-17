import { Container } from "./styles"; 
import { Divider } from "../Divider";
import { Mailbox } from "../Mailbox";
import logo from '../../assets/logo.png'
import twitter from '../../assets/icons/logo-twitter.svg'
import linkedin from '../../assets/icons/logo-linkedin.svg'
import github from '../../assets/icons/logo-github.svg'
const date = new Date();

export function Footer(){

  return(
    <>
      <Divider/>

      <Container>
        <div className="newsletter-cta">

          <div className="newsletter-text">
            <h2>Se Inscreva na nossa newsletter</h2>
            <p>Fique ligado nas ultimas noticias anúncios e artigos</p>
          </div >

          <div>
            <Mailbox/>
          </div>
        </div>

        <div className="footer-info">
          <div className="logo-and-text">
            <img className="logo" src={logo} alt="logo" />
            <p className="logo-text">Desvendando o futuro através da tecnologia</p>
          </div>

          <div className="footer-menu">
            <ul>
              <h3>Produto</h3>
              <li>Overview</li>
              <li>Soluções</li>
              <li>Lançamentos</li>
            </ul>

            <ul>
              <h3>Empresa</h3>
              <li>Sobre nós</li>
              <li>Notícias</li>
              <li>Contato</li>
            </ul>

            <ul>
              <h3>Recursos</h3>
              <li>Blog</li>
              <li>Newsletter</li>
              <li>Suporte</li>
            </ul>

            <ul>
              <h3>Social</h3>
              <li>Twitter</li>
              <li>Github</li>
              <li>Linkedin</li>
            </ul>

            <ul>
              <h3>Legal</h3>
              <li>Termos</li>
              <li>Privacidade</li>
              <li>Cookies</li>
            </ul>

          </div>
        </div>

        <div className="info-line">
          <p className="copy">© {date.getFullYear()} TechTalks. Todos os direitos reservados</p>

          <div className="icons">
            <img className="icon" src={twitter} alt="" />
            <img className="icon" src={linkedin} alt="" />
            <img className="icon" src={github} alt="" />
          </div>
        </div>
      </Container>
    </>
  )
}