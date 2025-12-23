const express = require("express"); //require the express pacakge, basically like import

const app = express(); //api initilization

http://localhost:5001/api/notes
//get endpoint
app.get("/api/notes", (req, res) => { 
    res.status(200).send("testing purposes, it does works");
});

//create endpoint
app.post("/api/notes", (req, res) => {
    res.status(201).send.json({message: "note created successfully"});
});

//update endpoint
app.put("/api/notes", (req, res) => {
    res.status(200).send.json({message: "note updated successfully"});
});

//delete endpoint
app.delete("/api/notes", (req, res) => {
    res.status(200).send.json({message: "note deleted successfully"});
});

app.listen(5001, () => {
    console.log("Server Started on PORT: 5001");
});