const config = require("./../config/default.json");
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token)
    return res
      .status(401)
      .json({ message: "Permission denied, Not Authorized" });

  try {
    const decoded = jwt.verify(token, config.jwt_secret_key);
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ message: "Not valid token" });
  }
};

module.exports = auth;
