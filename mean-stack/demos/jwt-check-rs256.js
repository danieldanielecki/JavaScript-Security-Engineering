var jwt = require("jsonwebtoken");
var fs = require("fs");

// verify an existing JWT
var existingToken =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWxpY2UiLCJpYXQiOjE2MjM4NTE2ODksImV4cCI6MTYyMzg1MTgwOSwic3ViIjoiMSJ9.IF8lZNfQSj5Ikv3JVi4sfmIrEf1yiwXSV2USz9IQ4sS0fddJ5_jytCxgM5ppIS5SNxzAfOS-6QoCLudhqO11S4g-5J77KpPxvqKiUyTOt1Vetg9NwAguBufKoTL1DMof5xKapjekvZHholQZVXjGIHNivrjuWPGfXHiFNurAwrOCgdlXgDwxjq8VkXk7P0Cg8a82Yyxnhrx9eNo5YvMXnqRfNAXDqmPzC0w-TupLO1AzVJ-rmL9FQz5sO7LwqZLhbOQ_-RqzLW9FHi9GhFj3S7qSBZuVOxlDQGdHUVx8HM5Jbqeno_UlS0p6QbztdMXS5UO_c9L_Lvrnk1DY61op7w";

var publicKey = fs.readFileSync("./public.key");

console.log("verifying");

const verify = jwt.verify(existingToken, publicKey);

console.log("Decoded JWT:", verify);
