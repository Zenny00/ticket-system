const express = require("express");
const app = express();
const cors = require("cors");

// Setup cross origin resource sharing to allow requests to be made from our client to the server
app.use(cors());

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});

// Homepage route
app.get("/", (req, res) => {
  res.send("Hello from the server!");
});
