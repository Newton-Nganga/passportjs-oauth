const handleErrors = (err,req,res,next)=>{
    console.error('Error caught :',err) //log the error
    console.error('First instance caught at :',err.stack.split('/n')[1])
    //check if response has already been sent
    if(res.headersSent){return next(err)}

    const statusCode = err.statusCode || 500;
    const errorMessage = err.message || 'Internal Server Error'

    //send error response
    res.status(statusCode).json({error:errorMessage})
}

const handleRoutes =(req, res, next) => {
    res.on("finish", () => {
      console.log(
        `${req.method} -> (originalUrl): ${req.originalUrl} (url):  ${req.url} (status): ${res.statusCode}`
      );
    });
    next();
  }

module.exports = {handleErrors,handleRoutes}