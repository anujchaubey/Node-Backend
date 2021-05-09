const jwt = require('jsonwebtoken'); //npm i jsonwebtoken

module.exports = (req, res, next) => {
    try {
        let tokens = req.headers.authorization;
        // console.log(tokens)
        if (typeof tokens !== 'undefined') {
            // const finalToken = tokens.split(' ');
            // console.log(finalToken)
            let decode = jwt.verify(tokens, 'anujchaubey');
            req.userData = decode;
            next();
        } else {
            res.status(401).json({
                error: "Auth Failed"
            });
        }
    } catch (error) {
        res.status(401).json({
            error: "Auth Failed"
        });
    }
}