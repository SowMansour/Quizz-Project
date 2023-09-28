//Ce wrapper nous evite d'avoir des try/catch partout dans nos controllers

exports.catchErrors = (fn) => {
    return(req, res, next) => {
        return fn(req, res, next).catch(next);
    }
}

exports.notFound = (req, res, next) => {
    const err = new Error(`La page demandée n'existe pas`);
    err.status = 404;
    next(err);
}

// On doit faire un middleware qui affiche les erreurs
exports.errorsCollector = (error, req, res, next) => {
    const status = error.status || 500;
    return res.status(status).render('error', {error});
}