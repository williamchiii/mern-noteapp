import express from "express";
import { createNote, getNoteByID, deleteNote, getAllNotes, updateNote } from "../controllers/notesController.js";
const router = express.Router();

//get endpoint
router.get("/", getAllNotes);
//get note by id
router.get("/:id", getNoteByID);
//create endpoint
router.post("/", createNote);
//update endpoint
router.put("/:id", updateNote);
//delete endpoint
router.delete("/:id", deleteNote);

export default router;


