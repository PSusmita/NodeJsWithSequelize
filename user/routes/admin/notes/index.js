const express = require("express");
const router = express.Router();
const NOTE = require("../../../controllers/admin/notes/index");
const AUTHENTICATION = require("../../../middlewares/user/authentications/authentications");
const URLS = require("./urls");

module.exports = () => {
    router.get(URLS?.GET_ALL, AUTHENTICATION?.verifyUserToken, NOTE?.GET_ALL);
    return router;
};