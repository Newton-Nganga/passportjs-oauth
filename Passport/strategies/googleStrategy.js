require('dotenv').config()
const User = require("../../models/models")
const GoogleStrategy = require("passport-google-oauth2").Strategy;



const google = new GoogleStrategy({
  clientID:process.env.GOOGLE_CLIENT_ID,
  clientSecret:process.env.GOOGLE_CLIENT_SECRET,
  callbackURL:`${process.env.URL}/api/google/callback`,
  passReqToCallback:true,
}, async function(request, accessToken, refreshToken, profile, done) {
  const user = User.findOne({googleId:profile.id})
  if(!user){
    const newUser = newUser({
      googleId:profile.id,
      email:profile.email,
      username:profile.displayName
    })
    await newUser.save()
  }
  return done(null, profile);
})

module.exports = google