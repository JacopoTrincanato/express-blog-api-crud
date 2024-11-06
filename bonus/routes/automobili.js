const express = require('express');

const router = express.Router();

const autoController = require('../controllers/autocontroller.js');

//creo le rotte

//creo index
app.get('/', autoController.index);

//creo show
app.get('/:marca', autoController.show);

//creo store
app.post('/:marca', autoController.store);

//creo update
app.put('/:marca', autoController.update);

//esporto le rotte
module.exports = router