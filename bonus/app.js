const express = require('express');

const app = express();

//creo il server e lo faccio ascoltare sulla porta 3006
app.listen(3006, ()=>{
    console.log('Server is running on port 3006');
    
})

const automobili = require('../bonus/database/db.js');

//creo index
app.get('/', (req, res)=>{
    res.json({
        data: automobili,
        count: automobili.length
    });
});

//creo show
app.get('/:marca', (req, res)=>{

    //trovo l'automobile
    const automobile = automobili.find(automobile=> automobile.marca === req.params.marca);

    //restituisco un messaggio di errore se l'automobile non è presente
    if (!automobile) {
        return res.status(404).json({error: `Non sono presenti automobili della marca ${req.params.marca}`})
    }

    return res.status(200).json({
        data: automobile
    });
});