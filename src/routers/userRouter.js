import express from "express"
import listAll from "../controllers/listAll.js"
import create from "../controllers/create.js"
import remove from "../controllers/remove.js"
import edit from "../controllers/edit.js"


const router = express.Router()

router.get('/', listAll)

router.post('/', create)

router.delete('/', remove)

router.put('/', edit)



export default router