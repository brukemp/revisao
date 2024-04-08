import express from 'express'
import userRouter from './routers/userRouter.js'
import logger from "./middlewares/logger.js"

const app = express()

app.use(express.json())
app.use(logger)

app.get('/', (req, res)=>{
    res.json({ success: "Bem vindo a API" })
})

app.use('/user', userRouter)

app.listen(3000, () => {
    console.log(`Servidor rodando...`)
})


