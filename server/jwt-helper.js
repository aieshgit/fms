const jwt = require("jsonwebtoken");

//const jwtTokens = ({ userId, username }) => {
const jwtTokens = ({ username }) => {
  // const user = { userId, username };
  const user = { username };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  });
  /*   const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "1m",
  }); */
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
  return { accessToken, refreshToken };
};

//module.exports = { jwtTokens };
module.exports = jwtTokens;
