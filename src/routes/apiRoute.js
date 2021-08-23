const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiController')

router.get('/', apiController.index)
router.get('/status/:id', apiController.status)

router.post('/create', apiController.create)
router.put('/update/:id', apiController.update)


module.exports = router