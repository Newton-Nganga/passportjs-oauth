const express = require("express")

const apiPage = async (req, res) => {
  console.log("/api  status:200");

  res.status(200).json({ message: "Get started with api development" });
};

module.exports = { apiPage };
