const { User } = require("../../../models/index");
const STATUS = require("../../../static/core/status/status");
const MESSAGE = require("../../../static/core/messages/userMessage");
const ERROR = require("../../../static/core/error/errors");
require("dotenv").config();

module.exports = async (email) => {
    try {
        if (email) {
            const isExisted = await User.findOne({ "where": { "email": email } });
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