const express = require('express');

const router = express.Router();

const autoController = require('../controllers/autocontroller.js');

//creo le rotte

//creo index
router.get('/', autoController.index);

//creo show
router.get('/:marca', autoController.show);

//creo store
router.post('/', autoController.store);

//creo update
router.put('/:marca', autoController.update);

//creo destroy
router.delete('/:marca', autoController.destroy);

//esporto le rotte
module.exports = router