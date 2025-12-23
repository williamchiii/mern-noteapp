import Note from "../models/Note.js" 

export async function getAllNotes(req, res) {
    try{
        const notes = await Note.find();
        res.status(200).json(notes);

    } catch (error){
        console.log("Error in getAllNotes controller", error)
        res.status(500).json({message:"Internal Server Error"})
    }
};

export async function createNote(req, res) {
    try{
        const {title,content} = req.body;
        const note = new Note({title: title, content: content});

        const savedNote = await note.save();
        res.status(201).json(savedNote);
    } catch (error){
        console.log("Error in createNotes controller", error)
        res.status(500).json({message:"Internal Server Error"})
    }
};

export async function updateNote(req, res) {
    try{
        const {title,content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            {title, content},
            {
            new: true,
        }
    );
        if (!updatedNote) return res.status(404).json({message: "note not found"});
        res.status(200).json(updatedNote);
    } catch (error){
        console.log("Error in updateNote controller", error)
        res.status(500).json({message: "Internal Server Error"});
    }
};

export function deleteNote(req, res) {
    res.status(200).json({message: "note deleted successfully"});
}