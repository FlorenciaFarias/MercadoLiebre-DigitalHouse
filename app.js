const express= require('express');

const app= express ();

app.use(express.static('public'));

app.listen(3030, () => {
    console.log('Servidor corriendo en el puerto 3030');
});

console.log(__dirname);

app.get('/', (req, res) => {
res.sendFile(__dirname + '/views/home.html')
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html')
    });

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html')
    });

