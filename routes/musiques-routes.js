const express = require('express');

const router = express.Router();

const musiquesControllers = require('../controllers/musiques-controllers');

router.get('/', musiquesControllers.getMusiques);

router.get('/:musiqueid', musiquesControllers.getMusiqueById)

router.post('/', musiquesControllers.createMusique);

module.exports = router;