import { Container } from "./style";  
import PropTypes from 'prop-types'

export function Button({text,type}){

  
  return(
      <Container
        type={type}
      >
        {text}
        
      </Container>
    )
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
}