const express = require("express");
const router = express.Router();
const URLS = require("./urls");
const REMINDER = require("../../../controllers/reminders/index");

module.exports = () => {
    router.post(URLS?.CREATE, REMINDER?.CREATE);
    router.get(URLS?.GET, REMINDER?.GET);
    router.get(URLS?.GET_ALL, REMINDER?.GET_ALL);
    router.get(URLS?.SEARCH, REMINDER?.SEARCH);
    router.put(URLS?.UPDATE, REMINDER?.UPDATE);
    router.post(URLS?.DELETE, REMINDER?.DELETE);
    return router;
};
