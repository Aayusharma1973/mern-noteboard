import Note from "../models/Note.js";


export  async function getAllnotes(req, res) {
    try{
        const notes = await Note.find().sort({ createdAt: -1 });
        res.status(200).json(notes)

    }catch(error){
        res.status(500).json({ message: "Failed to retrieve notes", error: error.message });
    }    
}

export async function getNoteById(req, res) {
    try{
        const id = req.params.id;
        const note = await Note.findById(id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.json(note);

    } catch(error){
        res.status(500).json({ message: "Failed to retrieve note", error: error.message });
    }   


}

export  async function createNote(req, res) {
    try{
        const {title,content} = req.body;
        const newNote = new Note({ title, content });
        const savedNote =await newNote.save();
        res.status(201).json(savedNote);

    }catch(error){
        res.status(500).json({ message: "Failed to create note", error: error.message });
    }
}

export  async function updateNote(req, res) {
    try{
        const id = req.params.id;
        const {title,content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(id, { title, content }, { new: true });
        if (!updatedNote) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json(updatedNote);
    }catch(error){
        res.status(500).json({ message: "Failed to update note", error: error.message });
    }
}

export  async function deleteNote(req, res) {
    try{
        const id = req.params.id;
        const deletedNote = await Note.findByIdAndDelete(id);
        if (!deletedNote) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json({ message: "Note deleted successfully", note: deletedNote });
    }catch(error){
        res.status(500).json({ message: "Failed to delete note", error: error.message });
    } 
}
