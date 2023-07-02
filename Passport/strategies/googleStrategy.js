require('dotenv').config()

const GoogleStrategy = require("passport-google-oauth2").Strategy;



const google = new GoogleStrategy({
  clientID:process.env.GOOGLE_CLIENT_ID,
  clientSecret:process.env.GOOGLE_CLIENT_SECRET,
  callbackURL:`http://localhost:${process.env.PORT}/api/google/callback`,
  passReqToCallback:true,
},(request,accessToken,refreshToken,profile,done)=>{
    console.log("Google profile:",profile)
    done(null,profile)
})

module.exports = google