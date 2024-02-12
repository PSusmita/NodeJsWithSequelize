const { Reminder } = require("../../models/index");
const STATUS = require("../../static/core/status/status");
const MESSAGE = require("../../static/core/messages/reminderMessage");
const SUCCESSMESSAGE = require("../../static/core/success/successMessage");
const ERROR = require("../../static/core/error/errors");

module.exports = async (reminderId) => {
    try {
        if (reminderId && (reminderId instanceof Array && reminderId.length > STATUS?.ZERO)) {
            const isDeletedRows = await Reminder.destroy({ "where": { "id": reminderId } });
            if (isDeletedRows > STATUS?.ZERO) {
                return (await SUCCESSMESSAGE?.successResponse(MESSAGE?.MULTIPLE_DELETE_SUCCESS));
            }
        }
        else if (reminderId && (reminderId instanceof Object)) {
            const isDeletedRows = await Reminder.destroy({ "where": { "id": reminderId } });
            if (isDeletedRows > STATUS?.ZERO) {
                return (await SUCCESSMESSAGE?.successResponse(MESSAGE?.DELETE_SUCCESS));
            }
        }
        else {
            return (await ERROR?.falseResponseAndMessage(MESSAGE?.DELETE_FAILED));
        }
    }
    catch (error) {
        return (await ERROR.errorResponse(error));
    }
};