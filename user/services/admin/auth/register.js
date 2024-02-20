const { Admin } = require("../../../models/index");
const STATUS = require("../../../static/core/status/status");
const SUCCESS = require("../../../static/core/success/successMessage");
const MESSAGE = require("../../../static/core/messages/adminMessage");
const ERROR = require("../../../static/core/error/errors");

module.exports = async (registerObj) => {
    try {
        const isRegister = await Admin.create(registerObj);
        if (isRegister) {
            return (await SUCCESS?.successResponse(MESSAGE?.REGISTER_SUCCESS));
        }
        else {
            return (await ERROR.falseResponseAndMessage(MESSAGE?.REGISTER_FAILED));
        }
    }
    catch (error) {
        return (await ERROR?.errorResponse(error));
    }
};