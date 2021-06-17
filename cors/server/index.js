const express = require("express");
const debug = require("debug")("server");
const cors = require("cors");

const app = express();
const port = process.env.SERVER_PORT || 3001;

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
// app.use(cors()); // Is the same thing as the upper code

app.get("/api/ping", (req, res) => {
  res.send({
    msg: "Hello, World",
  });
});

app.listen(port, () => debug(`Listening on port ${port}`));
