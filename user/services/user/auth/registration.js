const bcrypt = require("bcrypt");
const { User } = require("../../../models/index")
const STATUS = require("../../../static/core/status/status");
const ERROR = require("../../../static/core/error/errors");
require("dotenv").config();
const SALT = 10;

module.exports = async (obj) => {
    try {
        if (obj && obj?.password) {
            const hashPassword = await bcrypt.hash(obj?.password, SALT);
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