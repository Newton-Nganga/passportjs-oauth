require('dotenv').config()

const FacebookStrategy= require("passport-facebook").Strategy


const facebook = new FacebookStrategy({
  clientID:process.env.FACEBOOK_APP_ID,
  clientSecret:process.env.FACEBOOK_APP_SECRET,
  callbackURL:`http://localhost:${process.env.PORT}/api/facebook/callback`,
  profileFields:['id','displayName','Name','gender','picture.type(large)','email']
},

(token,refreshToken,profile,done)=>{
    console.log("Facebook profile:",profile)
    return done(null,profile)
})

module.exports = facebook