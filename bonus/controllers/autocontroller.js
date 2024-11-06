const automobili = require('../database/db.js');

//richiamo il metodo fs
const fs = require('fs');

//creo index
const index = (req, res)=>{
    res.json({
        data: automobili,
        count: automobili.length
    });
};

//creo show
const show = (req, res)=>{

    //trovo l'automobile
    const automobile = automobili.find(automobile=> automobile.marca === req.params.marca);

    //restituisco un messaggio di errore se l'automobile non è presente
    if (!automobile) {
        return res.status(404).json({error: `Non sono presenti automobili della marca ${req.params.marca}`});
    }

    return res.status(200).json({
        data: automobile
    });
};

//creo store
const store = (req, res)=>{
    
    //creo una nuova automobile
    const automobile = {
        marca: req.body.marca,
        modello: req.body.modello,
        alimentazione: req.body.alimentazione
    };

    //pusho l'automobile nell'array automobili
    automobili.push(automobile);

    //aggiorno il file
    fs.writeFileSync('./database/db.js', `module.exports = ${JSON.stringify(automobili, null, 4)}`);

    //restituisco il nuovo array
    return res.status(201).json({
        status: 201,
        data: automobili,
        count: automobili.length
    })
};

//esporto tutto
module.exports = {
    index,
    show,
    store
}