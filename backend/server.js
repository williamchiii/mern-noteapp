const express = require("express"); //require the express pacakge, basically like import

const app = express(); //api initilization

app.get("/api/notes", (req, res) => {
    res.send("testing purposes, it works");
}); //get from location, then when we get, run (http://localhost:5001/api/notes)

app.listen(5001, () => {
    console.log("Server Started on PORT: 5001");
});