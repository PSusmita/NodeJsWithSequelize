const express = require("express");
const router = express.Router();
const urls = require("./urls");
const USER = require("../../../controllers/user/auth/index");
const AUTHENTICATION=require("../../../middlewares/user/authentications/authentications");

module.exports = () => {
  router.post(urls?.REGISTER, USER?.REGISTER);
  router.post(urls?.LOGIN,USER?.LOGIN);
  return router;
};