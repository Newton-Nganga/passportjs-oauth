const mongoose = require("mongoose");

//define how data will be stored

//--------------------------------------------
//define user schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: String,
  password:String,
  googleId:String,
  facebookId:String,
  twitterId:String,
  profilePic:String,
});

const User = mongoose.model("User", UserSchema);//we will export User


module.exports = User
