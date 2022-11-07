const express = require ('express');
require('dotenv').config();
const cors= require('cors');
const { dbConnection } = require('./database/config');

console.log(process.env)

//crear server xpress

const app = express();

// Base de datos
dbConnection();

//CORS
app.use(cors());

//Directorio publico
app.use(express.static('public'));

// Lectura y parseo del Body
app.use(express.json());

// Rutas

app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

//TODO: auth // crear, login , renew


//TODO CRUD: Eventos
/* app.get('/', (req, res)=>{
    console.log('se requiere /'); 
    res.json({
        ok: true
    }) 
}); */

//Escuchar Peticiones
app.listen(process.env.PORT, ()=> {
    console.log(`Sevidor corriendo en puerto ${process.env.PORT} `);
});