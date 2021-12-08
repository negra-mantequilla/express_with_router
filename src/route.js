const { Router } = require("express");
let express= require("express")

let router = express.Router()

const database = [];

// Get function
router.get("/list", function(req, res){
  console.log("Get /list");
  res.json(database)
})

// POST function

router.post("/list", function(req, res){
  console.log("Post /list");
  let newInput = req.body;
  console.log("Req Body =", newInput);
  database.push(newInput)
  res.json(newInput)
})

// PUt function

router.put("/list/:pos", function(req, res){
  console.log("PUT /list/:pos");
  let newInput = req.body;
  let pos = req.params.pos
  database[pos] = newInput
  res.json(newInput)
})

// DELETE function

router.delete("/list/:pos", function(req, res){
  console.log("Deleting recipe");
  let deleted = database.splice(req.params.pos, 1)
  res.json("deleted")
})



module.exports = router