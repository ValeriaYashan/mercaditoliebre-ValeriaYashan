const express = require('express');
const app = express();

/* Config express */
app.use(express.static('public'));


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});
/* Register */
app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});
app.post('/register', (req,res)=> {
    res.send('Ya estás registrado');
});
/* Login */
app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});
app.post('/login', (req,res)=>{
    res.send('Ya estás logueado');
});

app.listen(  process.env.PORT.|| 3000,() => console.log('Servidor corriendo en puerto 3000'));