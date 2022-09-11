const express = require('express');
const cors = require('cors');
const {routerApi} = require('./routes');
const {dbConnection} = require('./models/dbConnection.model');

const app = express();

const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(cors())

routerApi(app);

app.listen(PORT, () => {
    console.log(`SERVER OK ON ${PORT}`);
    dbConnection();
})







/*
- coneccion a BD.
- modelos
- conectar con el front, proxy?.
- variables de entorno.
*/
