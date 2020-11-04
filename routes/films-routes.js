const express = require('express');

const router = express.Router();

router.get('/', (req,res,next) => {
    console.log('liste des films');
    res.json({ message: "Mes films !" });
});

module.exports = router;