import Contact from "../models/contactModel.js";




export const CreateContact = async (req, res) => {
    try {
        const { fullnames, email, subject } = req.body

        const contact = await Contact.create({
            fullnames, email, subject
        })

        res.status(201).json({ message: "contact created successfully", contact })
    } catch (error) {
        res.status(500).json({ message: "server error", error: error.message })
    }
}

export const getAllcontacts = async (req, res) => {
    try {
        const getAllcontacts = await Contact.find()
        return res.status(200).json({ message: "contact retrived successfully" })
    } catch (error) {
        return res.status(500).json({ message: "server error", error: error.message })
    }

}

export const getContactById = async (req, res) => {
    try {
        const { id } = req.params;
        const contact = await Contact.findById(id);
        if (!contact) {
            return res.status(400).json({ message: "contact not found" })
        }
    } catch (error) {
        return res.status(500).json({ message: "server error", error: error.message })
    }
}

export const updateContact = async (req, res) => {
    try {
        const { id } = req.params
        const updateContact = await Contact.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        )
        if (!updateContact) {
            res.status(400).json({ message: "contact not found" })
        }

        return res.status(200).json({ message: "Contact updated successfully" ,updateContact})
    } catch (error) {
       return res.status(500).json({message:"server error",error:error.message})
    }

}

export const DeleteContact = async(req,res) =>{
     try {
    const {id} = req.params
    const DeleteContact = await Contact.findByIdAndDelete(id);
    if(!DeleteContact){
        return res.status(400).json({message:"Contact not found"})
    }
    return res.status(200).json({message:"Contact deleted successfully"})

     } catch (error) {
          return res.status(500).json({message:"server error",error:error.message})
     }
}
