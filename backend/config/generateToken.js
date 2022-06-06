const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, '<:C<}x6Ta%qw7HYRe/qV7QQ9jZt9RAV#\\Nw]P{)ZL?~#@K"`3N', {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
