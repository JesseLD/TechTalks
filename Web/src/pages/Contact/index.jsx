import { Container } from "./styles";
import { ContactForm } from "../../components/ContactForm";
// import { Button } from "../../components/Button";
// import { useState } from "react";
// import axios from "axios";

export function Contact(){



  return(
      <Container>
        <h1>Contato</h1>

        <p>Ficamos felizes em saber que você deseja entrar em contato conosco! Se você tiver alguma pergunta, sugestão, parceria ou simplesmente quiser compartilhar suas ideias sobre tecnologia, estamos aqui para ouvir você.</p>

        <p>Para entrar em contato com a equipe do Tech Talks, preencha o formulário abaixo com suas informações e sua mensagem. Faremos o possível para responder o mais breve possível. Sua opinião é extremamente importante para nós.</p>

        <p>Além disso, você também pode nos encontrar nas redes sociais. Siga-nos no Twitter, curta nossa página no Facebook e acompanhe nossas atualizações no Instagram. Lá, você pode participar de discussões, ficar por dentro das últimas notícias e interagir com outros entusiastas da tecnologia.</p>

        <p>Agradecemos por visitar o Tech Talks e por fazer parte da nossa comunidade. Estamos ansiosos para ouvir de você!</p>

        <h2 className="end">Equipe Tech Talks</h2>

        <ContactForm/>

      </Container>
    )
}