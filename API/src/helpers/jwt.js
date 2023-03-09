const jwt = require('jsonwebtoken')


module.exports = {
    createToken:  (user, secretKey) => {
            jwt.sign({user}, secretKey, (err, token) => {
                return token
            })
    }
}