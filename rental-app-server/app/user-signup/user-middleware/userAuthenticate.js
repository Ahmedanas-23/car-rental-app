const jwt = require('jsonwebtoken');
const userAuthenticate = (req, res, next) => {

    const token = req.headers['authorization'];
if (!token) {
  return res.status(401).json({ error: "token not provided" });
}
try {
  const tokenData = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
  req.userId = tokenData.userId;
  next();
} catch (err) {
  res.status(401).json({ error: "invalid token" });
}

}

module.exports = userAuthenticate;