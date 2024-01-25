const { sequelize } = require("sequelize");
const bcrypt = require("bcrypt");
const { User } = require("../../../models/index");
const STATUS = require("../../../static/core/status/status");
const ERROR = require("../../../static/core/error/errors");
require("dotenv").config();

module.exports = async (loginData) => {
    try {

    }
    catch (error) {
        return await ERROR.errorResponse(error);
    }
};