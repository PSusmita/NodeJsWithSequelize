const express = require("express");
const router = express.Router();
const urls = require("./urls");
const USER = require("../../../controllers/user/auth/index");


module.exports = () => {
  router.post(urls?.REGISTER, USER?.REGISTER);
  return router;
};