const mongoose =require('mongoose')
const username = "connectmeadmin";
const password = "6aeDYGtwWMsK5IqQ";
const cluster = "cluster0.vioyh3p";
const dbname = "ConnectMe";


 const connection =async() => { 
    await mongoose.connect(
    `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
    
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
