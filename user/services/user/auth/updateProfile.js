const { User } = require("../../../models/index");
const STATUS = require("../../../static/core/status/status");
const MESSAGE = require("../../../static/core/messages/userMessage");
const SUCCESSMESSAGE = require("../../../static/core/success/successMessage");
const ERROR = require("../../../static/core/error/errors");

module.exports = async (userId, updateDatas) => {
    try {
        const isUpdatedFields = await User.update(updateDatas, { "where": { "id": userId } });
        if (isUpdatedFields > STATUS?.ZERO) {
            return await SUCCESSMESSAGE?.successResponse(MESSAGE?.PROFILE_UPDATE_SUCCESS);
        }
        else {
            return await ERROR?.falseResponseAndMessage(MESSAGE?.PROFILE_UPDATE_FAILED);
        }
    } catch (error) {
        return await ERROR?.errorResponse(error);
    }
};