const express = require("express");
const router = express.Router();
const URLS = require("./urls");
const AUTHENTICATION = require("../middlewares/user/authentications/authentications");

module.exports = () => {
    router.use(URLS?.USER, require("./user/index")());
    router.use(URLS?.REMINDER, AUTHENTICATION?.verifyUserToken, require("./reminders/crud/index")());
    return router;
};