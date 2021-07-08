const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req,res) =>{
   res.sendFile(path.join(__dirname, './views/index.html'));  // Permite enviar un archivo HTML
});

app.get('/registro', (req,res) =>{
    res.sendFile(path.join(__dirname, './views/registro.html'));
  });

  app.get('/registro', (req,res) =>{
    res.sendFile(path.join(__dirname, './views/login.html'));
  });

app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, './views')));

app.listen(3001, () => {
    console.log("Servidor corriendo");
});



