const express = require('express');
const bodyParser = require('body-parser');

const filmsRoutes = require('./routes/films-routes');
const musiquesRoutes = require('./routes/musiques-routes')

const app = express();

app.use(bodyParser.json());

app.use('/api/films', filmsRoutes);
app.use('/api/musiques', musiquesRoutes);

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || "une erreur non gérée est survenue !" })
})

app.listen(5000);