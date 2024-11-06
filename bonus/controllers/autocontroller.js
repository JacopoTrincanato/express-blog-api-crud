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
    const automobile = automobili.find(automobile => automobile.marca === req.params.marca);

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
    });
};

//creo update
const update = (req, res)=>{
    //cerco l'automobile nell'array
    const automobile = automobili.find(automobile => automobile.marca === req.params.marca);

    //restituisco un messaggio di errore se non la trovo
    if (!automobile) {
        return res.ststus(404).json({error: `Non sono presenti automobili della marca ${req.params.marca}`});
    };

    //aggiorno l'oggetto automobile
    automobile.nome = req.body.nome;
    automobile.modello = req.body.modello;
    automobile.alimentazione = req.body.alimentazione;

    //aggiorno il file
    fs.writeFileSync('./database/db.js', `module.exports = ${JSON.stringify(automobili, null, 4)}`);

    //restituisco il nuovo array di automobili
    res.json({
        status: 201,
        data: automobili,
        count: automobili.length
    });
};

//creo destroy
const destroy = (req, res)=>{
    //cerco l'automobile nell'array
    const automobile = automobili.find(automobile => automobile.marca === req.params.marca);

    //verifico se l'automobile esiste
    console.log(automobile);

    //restituisco un messaggio di errore se non la trovo
    if (!automobile) {
        return res.ststus(404).json({error: `Non sono presenti automobili della marca ${req.params.marca}`});
    };

    //cancello l'automobile
    const newAutomobili = automobili.filter(automobile => automobile.marca !== req.params.marca);

    //aggiorno il file
    fs.writeFileSync('./database/db.js', `module.exports = ${JSON.stringify(automobili, null, 4)}`);

    //restituisco il nuovo array di automobili
    res.status(200).json({
        status: 201,
        data: automobili,
        count: automobili.length
    });
    
};

//esporto tutto
module.exports = {
    index,
    show,
    store,
    update,
    destroy
}