const express = require('express');

const app = express();

//creo il server e lo faccio ascoltare sulla porta 3006
app.listen(3006, ()=>{
    console.log('Server is running on port 3006');
    
});

//creo index
app.get('/', );

//creo show
app.get('/:marca', );