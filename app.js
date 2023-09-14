const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000;

let contador = 0;

function incrementarContador() {
    contador += 100;
}

// Llamamos a setInterval fuera de la función para que se ejecute una vez cada 10 segundos.
setInterval(() => {
    contador += 10;
}, 1000); // Incrementa el contador cada 10 segundos

app.get('/', (req, res) => {
    res.send('<p>Hello, World, me llamou jusemarias10!</p>');
});

app.get('/obtener_contador', (req, res) => {
    res.json({ contador });
});

incrementarContador(); // Inicia el incremento del contador

app.use(express.static('public'))

app.get('*', (req, res) => {
    res.redirect('/');
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})
