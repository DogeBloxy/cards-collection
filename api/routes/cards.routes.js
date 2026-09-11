const express = require('express')
const router = express.Router()
const CardController = require('../controllers/cards.controller')

router.get('/', CardController.getCards)

router.post('/', CardController.create)

router.delete('/:id', CardController.delete)

module.exports = router