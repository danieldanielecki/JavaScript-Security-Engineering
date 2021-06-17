var jwt = require("jsonwebtoken");

// verify an existing JWT
var existingToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWxpY2UiLCJpYXQiOjE2MjM4NTE2MjB9.nbyCdPvz7yzjeen_Vgy6xVOQNNYeu5nufzS8cM0tpd4";

var secretKey = "secret-key";

const verify = jwt.verify(existingToken, secretKey);

console.log("Decoded JWT:", verify);
