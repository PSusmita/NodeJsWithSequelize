const sequelize = require("sequelize");
const {User}=require("../../../models/index")
const STATUS = require("../../../static/core/status/status");
const ERROR = require("../../../static/core/error/errors");

module.exports = async (obj) => {
    try {
        const registerUser = await User.create(obj);
        if (registerUser)
            return STATUS?.TRUE;
        else
            return STATUS?.FALSE;
    } catch (error) {
        return await ERROR?.errorResponse(error);
    }
};