const sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const { User } = require("../../../models/index")
const STATUS = require("../../../static/core/status/status");
const ERROR = require("../../../static/core/error/errors");
require("dotenv").config();

module.exports = async (obj) => {
    try {
        if (obj && obj?.password) {
            const hashPassword = bcrypt.hash(obj?.password, process.env.SALT);
            Object.assign(obj, { "password": hashPassword });
            const registerUser = await User.create(obj);
            if (registerUser)
                return (STATUS?.TRUE);
            else
                return (STATUS?.FALSE);
        }
        else {
            return (STATUS?.FALSE);
        }
    } catch (error) {
        return await ERROR?.errorResponse(error);
    }
};