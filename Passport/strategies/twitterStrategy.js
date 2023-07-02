require("dotenv").config();

const TwitterStrategy = require("passport-twitter").Strategy;

const twitter = new TwitterStrategy({
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: `http://localhost:${process.env.PORT}/twitter/callback`,
  },
  (accessToken,refreshToken, tokenSecret, profile, cb) => {
    console.log("call");
    //   done(null,profile)
    process.nextTick(() => console.log("Twitter profile:", profile));
  }
);

module.exports = twitter;
