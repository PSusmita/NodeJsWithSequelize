const express = require("express");
const router = express.Router();
const URLS = require("./urls");
const AUTHENTICATION = require("../middlewares/user/authentications/authentications");

module.exports = () => {
    router.use(URLS?.USER, require("./user/index")());
    router.use(URLS?.REMINDER, AUTHENTICATION?.verifyUserToken, require("./reminders/crud/index")());
    router.use(URLS?.NOTE, AUTHENTICATION?.verifyUserToken, require("./notes/crud/index")());
    router.use(URLS?.ADMIN, require("./admin/index")());
    return router;
};