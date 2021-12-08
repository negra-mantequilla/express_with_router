
const express = require("express");

const app = express();

app.use(express.json());

const routes = require("./route")

app.use(routes);

const PORT = 8002;







app.listen(PORT, function (){
  console.log("Server started on port", PORT);
})



