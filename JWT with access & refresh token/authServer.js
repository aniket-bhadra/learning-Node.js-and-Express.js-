//this server only for authentication & authorization
//this server only going to  used for login logut
//& for creation of token, deletion of token & refrshen of token

const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");
app.use(express.json());

//normaly we store refresh token in some form of database or in some form of redis cache, so this is not ideal coz everytime server restarts this value will be empty

let refreshTokens = [];

app.listen(4000, () => {
  console.log("server is listening to port 4000");
});
