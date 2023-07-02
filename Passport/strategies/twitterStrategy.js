// require("dotenv").config();

// const TwitterStrategy = require("passport-twitter").Strategy;

// const twitter = new TwitterStrategy({
//     customerKey: process.env.TWITTER_CUSTOMER_KEY,
//     customerSecret: process.env.TWITTER_CUSTOMER_SECRET,
//     callbackURL: `http://localhost:${process.env.PORT}/twitter/callback`,
//   },
//   (token, tokenSecret, profile, cb) => {
//     console.log("call");
//     //   done(null,profile)
//     process.nextTick(() => console.log("Twitter profile:", profile));
//   }
// );

// module.exports = twitter;
