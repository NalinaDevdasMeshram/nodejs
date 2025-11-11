const SECRET_PASSWORD_NALINA = "1245fkglg";
function Authorize(req, res, next) {
  const headers = req.headers;
  const passwordAuthorization = headers.authorization;
  if (passwordAuthorization === SECRET_PASSWORD_NALINA) {
    next();
  } else {
    res.status(403).json(`Please enter correct password!!`);
  }
}
module.exports = { Authorize };
