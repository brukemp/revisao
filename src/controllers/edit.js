import userModel from "../models/userModel.js";

const edit = (req, res) =>{
    const userData = req.body

    res.json({
        success: "Usuario atualizado com sucesso!",
        user: userModel.edit(userData)
    })
}

export default edit