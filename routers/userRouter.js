import express from "express"
import routes from "../routes"

const userRouter = express.Router()

userRouter.get(routes.users, (req, res) => res.send("fxxk users"))


export default userRouter
