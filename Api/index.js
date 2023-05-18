const express = require('express')
const App = express();
const cors = require('cors')

App.use(cors());
App.use(express.json());

data = {
  name: 'Gabriel',
  email: 'kenaa@example.com',
  subject: 'Teste',
  message: 'Teste'
}

App.post('/contact-messages',(req,res)=>{
  // res.send('Hello World')
  // res.sendStatus(200)
  console.log('> [server] Requisição Recebida com Sucesso!')

  data.name = req.body.name;
  data.email = req.body.email;
  data.subject = req.body.subject;
  data.message = req.body.message;
  
  console.log(`
    Name: ${req.body.name}
    Email: ${req.body.email}
    Assunto :${req.body.subject}
    Messagem: ${req.body.message}

    
   `)
   res.sendStatus(200)
})

App.get('/',(req,res)=>{
  
  console.log('req')

  res.send(data)

})


const port = 9696
App.listen(port,()=>{
  console.log(`> [server] Server is running on port ${port}`)
})
