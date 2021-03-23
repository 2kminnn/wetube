import express from "express"

// export 하는 방식의 차이점?
// export default userRouter
export const userRouter = express.Router()

userRouter.get("/", (req, res) => res.send('user index'))
userRouter.get("/edit", (req, res) => res.send('user edit'))
userRouter.get("/password", (req, res) => res.send('user password'))
