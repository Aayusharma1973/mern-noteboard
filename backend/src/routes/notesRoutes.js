import express from "express";
import { createNote, getAllnotes,updateNote,deleteNote ,getNoteById} from "../controllers/notesControllers.js";

const router = express.Router();

router.get("/",getAllnotes);
router.get("/:id",getNoteById);
router.post("/",createNote);
router.put("/:id",updateNote);
router.delete("/:id",deleteNote);



export default router;
