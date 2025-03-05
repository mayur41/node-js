const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.checkAuth = (req, res, next) => {
  var token = req.headers.authorization;
  if (token && token.split(' ').length > 1 && token.split(' ')[0] == 'Bearer') {
    jwt.verify(token.split(' ')[1], "as#ndjadsa#@dsad$##k%*#MK!@", (err, decoded) => {
      if (err) {
        req.decoded = undefined;
        return res.status(401).send({ status: 'Unauthorized', msg: "UNAUTHORIZE" });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    req.decoded = undefined;
    return res.status(401).send({ status: 'Unauthorized', msg: "UNAUTHORIZE" });
  }
}


//create hash password 
exports.createHashPassword = async (decryptedPassword) => {
  return await bcrypt.hash(decryptedPassword, saltRounds);
};

//Compare hashedPassword
exports.comparePassword = async (decryptedPassword, userHashedPassword) => {
  return await bcrypt.compare(decryptedPassword, userHashedPassword);
};


