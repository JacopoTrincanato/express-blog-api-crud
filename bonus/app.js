const express = require('express');

const app = express();

const autoController = require('./controllers/autocontroller.js')

//creo il server e lo faccio ascoltare sulla porta 3006
app.listen(3006, ()=>{
    console.log('Server is running on port 3006');
    
});

//creo le rotte

//creo index
app.get('/', autoController.index);

//creo show
app.get('/:marca', autoController.show);

//creo store
app.get('/:marca', autoController.store);