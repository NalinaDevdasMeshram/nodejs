const SECRET_NALINA_MESHRAM = "12345LFJF";

function Authorize(req, res, next) {
  const headers = req.headers;
  const passwordFormRequest = headers.authorization;
  if (SECRET_NALINA_MESHRAM === passwordFormRequest) {
    next();
  } else {
    res.status(403).json({ message: "please enter correct password!!" });
  }
}

module.exports = { Authorize };
