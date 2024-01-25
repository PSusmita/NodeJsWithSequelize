const { sequelize } = require("sequelize");
const { User } = require("../../../models/index");
const STATUS = require("../../../static/core/status/status");
const MESSAGE = require("../../../static/core/messages/message");
const ERROR = require("../../../static/core/error/errors");
require("dotenv").config();

module.exports = async (email) => {
    try {
        if (email) {
            const isExisted = await User.findOne({"email": email });
            if (isExisted === null) {
                return await ERROR?.falseResponseAndMessage(MESSAGE?.UNEXISTED_USER);
            }
            else {
                return (STATUS?.TRUE);
            }
        }
    }
    catch (error) {
        return await ERROR?.errorResponse(error);
    }
}