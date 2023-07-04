const passport = require("passport")
const User = require("../models/models")
require('dotenv').config()

const google = require("./strategies/googleStrategy")
const facebook = require("./strategies/facebookStrategy")
const twitter = require("./strategies/twitterStrategy")
// const linkedin = require("./strategies/linkedinStrategy")



//serialize the user for the session
passport.serializeUser(function(user,done){
    done(null,user)
})

//deserialize the user
passport.deserializeUser(function(user,done){
    // User.findById(id,(err,doc)=>{
    //   done(null,doc)  
    // })
    done(null,user)
    
})

//google instance
passport.use(google)
//facebook instance
passport.use(facebook)
//twitter instance
passport.use(twitter)
//linkedin instance
// passport.use(linkedin)
