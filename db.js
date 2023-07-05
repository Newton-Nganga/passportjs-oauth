const mongoose =require('mongoose')
require('dotenv').config()


 const connection =async() => { 
    await mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_DBNAME}?retryWrites=true&w=majority`,
    
     {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(()=>{
    console.log(`==== MongoDB Connected sucessfully ====`);
  })
  .catch(err=>console.log(err))
  
 }


module.exports = connection;
