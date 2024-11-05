const express = require('express')
const router = express.Router()

//importo il contenuto di dolcicontroller
const dolciController = require('../controllers/dolcicontroller.js')

//definisco le rotte

//index 
router.get('/', dolciController.index);

//show
router.get('/:slug', dolciController.show);

//store
router.post('/', dolciController.store);

//update
router.patch('/:slug', dolciController.update)

//esporto router
module.exports = router