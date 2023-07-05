require("dotenv").config();

const TwitterStrategy = require("passport-twitter").Strategy;

const twitter = new TwitterStrategy({
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: `http://localhost:${process.env.PORT}/api/twitter/callback`,
  },async(accessToken,refreshToken, tokenSecret, profile, done) => {
    const user = User.findOne({twitterIdId:profile.id})
    if(!user){
      const newUser = newUser({
        twitterId:profile.id,
        email:profile.email ? profile.email : "",
        username:profile.username,
      })
      await newUser.save()
    }
    return done(null,profile)
  }
);

module.exports = twitter;
