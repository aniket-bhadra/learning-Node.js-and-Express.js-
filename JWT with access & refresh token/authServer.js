//this server only for authentication & authorization
//this server only going to  used for login logut
//& for creation of token, deletion of token & refrshen of token

const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");
app.use(express.json());

//normaly we store refresh token in some form of database or in some form of redis cache, so this is not ideal coz everytime server restarts this value will be empty

let refreshTokens = [];

//this route used for creating new token
app.post("/token", (req, res) => {
  const refreshToken = req.body.token;
  if (!refreshToken) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
  
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY, (error, user) => {
    if (error) return res.sendStatus(403);
    const accessToken = generateAccessToken({ name: user.name });
    res.json({ accessToken });
  });
});

app.post("/login", (req, res) => {
  //here authenticate the user 1st

  //then create token
  const username = req.body.username;
  const user = {
    name: username,
  };
  const accessToken = generateAccessToken(user);
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_KEY);
  //in refresh token we manually handle the expiration instead of letting jwt handle the expiration

  refreshTokens.push(refreshToken);
  res.json({
    accessToken,
    refreshToken,
  });
});



function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_KEY, { expiresIn: "55s" });
}
//in real application expiresIn should be inbetween 10-30mins

app.listen(4000, () => {
  console.log("server is listening to port 4000");
});
