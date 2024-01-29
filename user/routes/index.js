const express = require("express");
const router = express.Router();
const URLS = require("./urls");

module.exports = () => {
    router.use(URLS?.USER, require("./user/index")());
    router.use(URLS?.REMINDER, require("./reminders/crud/index")());
    return router;
}