const jwt = require("jsonwebtoken");

//function authenticateToken(req, res, next) {
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"]; //Bearer TOKEN
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) {
    return res.status(401).json({ error: "Null token" });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, verifiedJwt) => {
    if (error) {
      console.log("this is an error:" + error.message);
      return res.status(403).json({ error: error.message });
    }

    req.user = verifiedJwt;
    console.log("success: " + req.user);
    next();
  });
};

//module.exports = { authenticateToken };
module.exports = authenticateToken;
