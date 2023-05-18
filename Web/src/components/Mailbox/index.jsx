import { Container } from "./styles";
import { Button } from "../Button";

export function Mailbox(){

  return(
    <Container>
      <form action="#" method="post">
        <input type="email" name="email" id="email" placeholder="Insira O Seu Email" required/>
        <Button
          text="Se Inscreva"
        />
      </form>
    </Container>
  )
}