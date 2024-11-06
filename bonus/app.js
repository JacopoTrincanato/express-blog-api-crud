const express = require('express');

const app = express();

//creo il server e lo faccio ascoltare sulla porta 3006
app.listen(3006, ()=>{
    console.log('Server is running on port 3006');
    
});

//importo le rotte
const autoRoutes = require('./routes/automobili.js');

//inserisco il middleware
app.use(express.json());

//utilizzo le rotte
app.use('/automobili', autoRoutes)