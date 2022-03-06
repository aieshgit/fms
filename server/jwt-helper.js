const jwt = require("jsonwebtoken");

const jwtTokens = ({ userId, username }) => {
  const user = { userId, username };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "180m",
  });
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "1m",
  });
  return { accessToken, refreshToken };
};

//module.exports = { jwtTokens };
module.exports = jwtTokens;
