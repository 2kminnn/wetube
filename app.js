// require: 노드모듈을 어딘가에서 가져오는 역할 (import)
// 우선 내 프로젝트 폴더에서 찾고 이후에 node_modules에서 찾는다.
// const express = require('express')
import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import {userRouter} from "./router"
// express를 실행 시킴
const app = express()

const handleHome = (req, res) => res.send("hello from home!!")

//arrow function
const handleProfile = (req, res) => res.send("You are on my profile")

app.use(cookieParser())
// 이거 왜 이러지 막대 바
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(helmet())
app.use(morgan("dev"))


app.get("/",handleHome)
app.get("/profile",handleProfile) 

app.use("/user", userRouter)


export default app