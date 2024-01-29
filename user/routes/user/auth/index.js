const express = require("express");
const router = express.Router();
const URLS = require("./urls");
const USER = require("../../../controllers/user/auth/index");
const AUTHENTICATION=require("../../../middlewares/user/authentications/authentications");

module.exports = () => {
  router.post(URLS?.REGISTER, USER?.REGISTER);
  router.post(URLS?.LOGIN,USER?.LOGIN);
  router.get(URLS?.PROFILE,AUTHENTICATION?.verifyUserToken,USER?.PROFILE);
  router.put(URLS?.UPDATE,AUTHENTICATION?.verifyUserToken,USER?.UPDATE);
  return router;
};