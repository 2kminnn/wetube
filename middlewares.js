// app.use((req,res,next) => {

import routes from "./routes"

// })

// app.use(function(req,res,next){

// })

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = 'WeTube'
    res.locals.routes = routes
    next()
}