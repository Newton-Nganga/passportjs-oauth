require('dotenv').config()

const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy


const linkedin = new LinkedInStrategy({
  clientID:process.env.LINKEDIN_CLIENT_ID,
  clientSecret:process.env.LINKEDIN_CLIENT_SECRET,
  callbackURL:`/linkedin/callback`,
  scope:['r_emailaddress','r_liteprofile']
},(token,tokenSecret,profile,done)=>{
    
    console.log("LinkedIn profile:",profile)
   return done(null,profile)
})

module.exports = linkedin