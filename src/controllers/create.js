import userModel from "../models/userModel.js";

const create = (req, res) => {
    const user = req.body
    res.json({
        success: "Usuario adicionado com sucesso!",
        user: userModel.create(user)
    })
}

export default create