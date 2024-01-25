const bcrypt = require("bcrypt");
const { User } = require("../../../models/index");
const STATUS = require("../../../static/core/status/status");
const ERROR = require("../../../static/core/error/errors");

module.exports = async (normalPassword, hashPassword) => {
    try {
        const isValidPassword = await bcrypt.compare(normalPassword, hashPassword);
        if (isValidPassword) {
            return (STATUS?.TRUE);
        }
        else {
            return (STATUS?.FALSE);
        }
    }
    catch (error) {
        return await ERROR?.errorResponse(error);
    }
};