import { Container } from './styles'
import PropTypes from 'prop-types'


export function Messages({text,type}){

  let display = 'flex'

  let BGColor = '#000000'
  let color = '#ffffff'

  if(type == 'success'){
    BGColor = '#18b13a33'
    color = '#0a4b18'
  }
  else if(type == 'warning'){
    BGColor = '#99630033'
    color = '#664200'
  }
  else if(type == 'error'){
    BGColor = '#7f000033'
    color = '#4c0000'
  }
  else{
      BGColor = '#00000033'
      color = '#ffffff'
      text = 'Error no type specified'
    }

  return(
      <Container>
        <div
          style={{
            display: `${display}`,
            justifyContent: 'center',
            alignItems: 'center',
            height: '50px',
            width: '80vw',
            backgroundColor: `${BGColor}`,
            color: `${color}`,
            textAlign: 'center',
            borderRadius: '10px',
            // fontWeight: 'bold',
            margin: '0px auto',
        
        
          }}
        >
          <p>{text}</p>
        </div>
      </Container>
    )
}
Messages.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
}