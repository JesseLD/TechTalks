import { Button } from "../Button"
import { Container } from "./styles"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function ContactForm(){

  const [dados,setdados] = useState({})

  const headers = {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    // "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Origin, Authorization, X-Requested-With"
  }

  const navigate = useNavigate();

  const handleSubmit = async (event)=>{
    event.preventDefault();
    try{
      await axios.post('http://localhost:9696/contact-messages', dados , {headers})
      .then(response =>{
        
        navigate('/form-feedback');
        console.log(response)
      })
      .catch((err)=>{
        console.log(err)
      })
     
      
      console.log('assd')

    }catch(error){
      console.log(error)
    }
  }

  const handleChange = event =>{
    setdados({ ...dados,[event.target.name]: event.target.value})
  }

  return(
    <Container className="form-container">
          <form onSubmit={handleSubmit} className="form">
            <label htmlFor="name">Seu Nome</label>
            <input type="text" name="name" id="name" placeholder="Ex: José Silva" onChange={handleChange} required/>

            <label htmlFor="email">Email</label>
            <input type="mail" name="email" id="email" placeholder="Ex: seuemail@mail.com" 
            onChange={handleChange} required/>

            <label htmlFor="subject">Assunto</label>
            <input type="text" name="subject" id="subject" placeholder="Assunto"
            onChange={handleChange}/>

            <label htmlFor="message">Mensagem</label>
            <textarea name="message" id="message" cols="10" rows="5" placeholder="Mensagem"
            onChange={handleChange} required>
            </textarea>

            {/* <button type="submit">Send</button> */}

            <Button
              text="Enviar"
              type="submit"
            />
          </form>
        </Container>
  )
}