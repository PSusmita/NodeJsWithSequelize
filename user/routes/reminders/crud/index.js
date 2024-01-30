const express = require("express");
const router = express.Router();
const URLS = require("./urls");
const REMINDER = require("../../../controllers/reminders/index");
const AUTHENTICATION = require("../../../middlewares/user/authentications/authentications");

module.exports = () => {
    router.post(URLS?.CREATE, AUTHENTICATION?.verifyUserToken, REMINDER?.CREATE);
    router.get(URLS?.GET, AUTHENTICATION?.verifyUserToken, REMINDER?.GET);
    return router;
};