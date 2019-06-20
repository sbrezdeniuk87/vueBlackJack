const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
const api = require('./db/api.js')

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/login',(req ,res)=>{

  if(!req.body) return res.sendStatus(400);
    
  let dataUser = req.body;
  
  api.checkUser(dataUser)
    .then((doc)=>{
      res.send(doc._id);								
    })
    .catch((error)=>{
              console.log(error);
      res.sendStatus(400, error);			
    });  
  
 
});

app.post('/registration', (req, res)=> {  
  if(!req.body) return res.sendStatus(400);
    console.log('Registration',req.body);
    let dataUser = req.body;
    console.log('Registration',dataUser);
    
    api.createUser(dataUser)
              .then((result)=>{
                  res.json(result);
              })
              .catch((err)=>{
                  console.log(err);
                  res.sendStatus(400, error);                    
              });    
});

app.listen(3000, ()=>{
  console.log('Server has been started');
})