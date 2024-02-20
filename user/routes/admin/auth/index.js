const express = require("express");
const router = express.Router();
const ADMIN = require("../../../controllers/admin/auth/index");
const URLS = require("./urls");

module.exports = () => {
    router.post(URLS?.REGISTER, ADMIN?.REGISTER);
    return router;
};