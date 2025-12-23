import express from "express";
import notesRoutes from "./routes/notesRoutes.js";

const app = express(); //api initilization

app.use("/api/notes", notesRoutes);


app.listen(5001, () => {
    console.log("Server Started on PORT: 5001");
});