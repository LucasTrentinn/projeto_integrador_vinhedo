const jwt = require('jsonwebtoken')
const token = require('crypto').randomBytes(64).toString('hex')
console.log(token)


module.exports = function (req, res, next) {
  if(!req.headers.authorization) 
    res.status(401).send('Token não informado!')

  const token = req.headers.authorization.substring(4)
  const verified = jwt.verify(token, process.env.TOKEN_SECRET, {expiresIn: '3600s'})
  req.user_id = verified.user_id

  next()
}