import Note from "../models/Note.js" 

export async function getAllNotes(_, res) {
    try{
        const notes = await Note.find().sort({createdAt: -1}); //show newest notes first
        res.status(200).json(notes);

    } catch (error){
        console.log("Error in getAllNotes controller", error)
        res.status(500).json({message:"Internal Server Error"})
    }
};

//find note by ID, if doesnt exist return 404 error. if exist print out the JSON
export async function getNoteByID(req, res){
    try{
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({message: "note not found"});
        }
        res.json(note);
    } catch(error){
        console.log("Error in getNoteByID controller", error)
        res.status(500).json({message:"Internal Server Error"})
    }
}

//create a note
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

// update note, return 404 error if note id doesnt exist, if exist return the updated JSON
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
        if (!updatedNote) {
            return res.status(404).json({message: "note not found"});
        }
        res.status(200).json(updatedNote);
    } catch (error){
        console.log("Error in updateNote controller", error)
        res.status(500).json({message: "Internal Server Error"});
    }
};

//delete a note. Return 404 error if it doesnt exist, if it does return message successful
export async function deleteNote(req, res) {
    try{
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if (!deletedNote){
            return res.status(404).json({message: "note not found"});
        }
        res.status(200).json({message: "note deleted succesfully"});
    } catch(error){
        console.log("Error in deleteNote controller", error)
        res.status(500).json({message: "Internal Server Error"});
    }
}