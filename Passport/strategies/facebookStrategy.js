const User = require('../../models/models')

require('dotenv').config()

const FacebookStrategy= require("passport-facebook").Strategy


const facebook = new FacebookStrategy({
  clientID:process.env.FACEBOOK_APP_ID,
  clientSecret:process.env.FACEBOOK_APP_SECRET,
  callbackURL:`/api/facebook/callback`,
  // profileFields:['id','displayName','name','gender','picture.type(large)','email']
},async(token,refreshToken,profile,done)=>{
  const user = User.findOne({facebookId:profile.id})
  if(!user){
    const newUser = new User({
     facebookId:profile.id,
     username:profile.username ? profile.username: profile.displayName,

    })
    await newUser.save()
  }
    console.log("Facebook profile:",profile)
    return done(null,profile)
})

module.exports = facebook