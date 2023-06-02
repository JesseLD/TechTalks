import { Container } from './styles'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
// import styled from "styled-components";



const FlashMessage = ({ message,type}) =>{
  return (
    <Container>
      <div className={`flash-message ${type}`}>{message}</div>
    </Container>

  )
}

export const Messages = () =>{

  const [flashMessages,setFlashMessages] = useState(() => ([]))

  const addFlashMessage = (message, type) => {
    const newMessage = { message, type};
    setFlashMessages(prevMessages => [...prevMessages, newMessage]);

  }
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setFlashMessages([]);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [flashMessages]);


  return (
      <div>
        {/* Renderiza todas as flash messages */}
        {flashMessages.map((message, index) => (
          <FlashMessage
            key={index}
            message={message.message}
            type={message.type}
          />
        ))}
  
        {/* Exemplo de botão que adiciona uma flash message */}
        {/* <button
          onClick={() => addFlashMessage('Exemplo de flash message', 'success')}
        >
          Adicionar Flash Message
        </button> */}
      </div>
    );
}

FlashMessage.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
}

