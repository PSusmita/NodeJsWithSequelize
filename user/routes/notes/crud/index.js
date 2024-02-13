const express = require("express");
const router = express.Router();
const URLS = require("./urls");
const NOTE = require("../../../controllers/notes/index");

module.exports = () => {
    router.post(URLS?.CREATE, NOTE?.CREATE);
    return router;
};