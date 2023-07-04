const express = require("express");
const connection = require("../db")

//try to connect to the db
console.log("____ TRYING TO CONNECT TO DB ____");
connection();

const apiPage = async (req, res) => {
  console.log("/api  status:200");

  //res.status(200).json({ message: "Get started with api development" });
  res.status(200);
  return res.render("index", { message: "success" });
};


const logout = async (req, res,next) => {
  req.logOut(
    err =>{
      console.log("Logged out")
      if(err){return next(err)}
      res.status(200)
      res.redirect('/');
    }
  );
  
};

module.exports = { apiPage, logout };
