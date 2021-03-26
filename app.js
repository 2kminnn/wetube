// require: 노드모듈을 어딘가에서 가져오는 역할 (import)
// 우선 내 프로젝트 폴더에서 찾고 이후에 node_modules에서 찾는다.
// const express = require('express')
import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import { localsMiddleware } from "./middlewares"
import userRouter from "./routers/userRouter"
import videoRouter from "./routers/videoRouter"
import globalRouter from "./routers/globalRouter"
import routes from "./routes"
// express를 실행 시킴.
const app = express()

app.use(helmet())
app.set('view engine', "pug")
app.use(cookieParser())
// 이거 왜 이러지 막대 바
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(morgan("dev"))


app.use(localsMiddleware)
app.use(routes.home, globalRouter)
app.use(routes.users, userRouter)
app.use(routes.videos, videoRouter)


export default app