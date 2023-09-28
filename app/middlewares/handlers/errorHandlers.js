//Ce wrapper nous evite d'avoir des try/catch partout dans nos controllers

exports.catchErrors = (fn) => {
    return(req, res, next) => {
        return fn(req, res, next).catch(next);
    }
}