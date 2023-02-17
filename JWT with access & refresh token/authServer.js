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
  // here we r checking--------the token that we r getting from the request with token that we have in you valid list of refresh tokens, so if that checks get passed why we r veirfying in the next step?




  //normally this refreshToken save into your database, so if somebody get illegal access to your db & also stolen valid user refresh token still they can't generate the access token with overwritten data coz of this extra verify step, if they change the token data & then create JWT & then store that token to your db & replace the your existing refreshToken, still they will be failed to generate vaild accessToken from that.
  
   //coz after getting of all still that person needs to know the secret key to generate the same signature, only then they can genrate valid jwt with overwritten data
  
  //& also because of that extra step , if somebody get illegal access to you refresh token, but when that refresh token expired OR when we ourself deleted that refresh token after any action (for ex- logout), hacker can't issue another valid refresh token to genrate access tokens, coz hacker does not have that secret key to genreate valid refresh token, this why verifying is imp

 

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
