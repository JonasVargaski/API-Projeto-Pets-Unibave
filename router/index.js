const express = require('express');
const router = express.Router();

const usuario = require('./usuario')
const animal = require('./animal')
const email = require('./email')


router.use('/', usuario)
router.use('/', animal)
router.use('/', email)

//envia erro se nao encontrar rota
router.get('/*', (req, res) => res.status(404).json({ error: 'Router not found' }))
router.post('/*', (req, res) => res.status(404).json({ error: 'Router not found' }))
router.put('/*', (req, res) => res.status(404).json({ error: 'Router not found' }))
router.delete('/*', (req, res) => res.status(404).json({ error: 'Router not found' }))

module.exports = router;