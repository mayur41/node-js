const bcrypt = require('bcrypt');
const saltRounds = 12;

exports.createHashPwd = async (password) => {
  const hashedPassword = bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

exports.comparePwd = async (password, hashedPassword) => {
  const passwordMatch = bcrypt.compare(password, hashedPassword);
  return passwordMatch;
};

