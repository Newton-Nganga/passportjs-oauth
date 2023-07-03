const express = require("express")
const passport = require('passport')
const router = require("./routers")
const cookieSession = require("cookie-session")
const path = require('path')
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 5000


const app = express()
//set ejs as the view engine


app.use(cookieSession({
    name:'user-auth-session',
    keys:['key1','key2']
}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.json())
app.use('static',express.static(path.join(__dirname,'public')))
app.set("view engine","ejs")
app.set('views',path.join(__dirname,'/views'))
//a middeleware to log the route hit plus the status code
router.use((req,res,next)=>{
    res.on('finish',()=>{
        console.log(`${req.method} -> (originalUrl): ${req.originalUrl} (url):  ${req.url} (status): ${res.statusCode}`)
    });
    next()
})

//logged in middleware
const isLoggedIn = (req,res,next)=>{
    req.user ? next() : res.sendStatus(401)
}

//passport Initialized
app.use(passport.initialize())

//set up the session
app.use(passport.session())

//Api routes
app.use("/api/",router)


app.get("/logout",(req,res)=>{
   req.logIn();
   res.redirect('/api')
})
app.get('*',(req,res)=>{
    res.status(404).render('404')
  })
app.listen(PORT,console.log(`server is listening on port ${PORT}`))