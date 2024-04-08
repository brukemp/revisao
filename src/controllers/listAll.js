import userModel from "../models/userModel.js"

const listAll = (req, res) => {
    res.json({
        success: "Usuarios listados com Sucesso",
        users: userModel.list()
    })
}


export default listAll
