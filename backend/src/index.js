require('dotenv/config');
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

//Importar routers
const locationRouter = require('./routers/location');
const currentRouter = require('./routers/current');
const forecastRouter = require('./routers/forecast');

//Enable CORS
app.use(cors());
app.options('*', cors());

//Middlewares
app.use(express.json());
app.use(morgan('tiny'));

const api = process.env.API_URL;
const port = process.env.PORT? process.env.PORT : 4000;

//Routers
app.use(`${api}/location`, locationRouter);
app.use(`${api}/current`, currentRouter);
app.use(`${api}/forecast`, forecastRouter);

//Inicio de servidor
app.listen(port, ()=>{
    console.log(`Server is running in port ${port}`);
})

module.exports = app