import userModel from "../models/userModel.js";

const remove = (req, res) => {
    const userId = req.body.id
    res.json({
        success: "Usuario deletado com sucesso!",
        user: userModel.remove(userId)
    })
}

export default remove