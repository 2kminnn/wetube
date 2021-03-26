import express from "express"
import { users,changePassword, editProfile, userDetail } from "../controller/userController"
import routes from "../routes"

const userRouter = express.Router()

userRouter.get(routes.editProfile, editProfile)
userRouter.get(routes.userDetail, userDetail)
userRouter.get(routes.changePassword, changePassword)

export default userRouter
