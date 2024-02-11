const { Reminder } = require("../../models/index");
const STATUS = require("../../static/core/status/status");
const MESSAGE = require("../../static/core/messages/reminderMessage");
const SUCCESSMESSAGE = require("../../static/core/success/successMessage");
const ERROR = require("../../static/core/error/errors");

module.exports = async (reminderId, updateFields) => {
    try {
        const [isUpdatedReminderRows] = await Reminder.update(updateFields, { "where": { "id": reminderId } });
        if (isUpdatedReminderRows > STATUS?.ZERO) {
            return (await SUCCESSMESSAGE?.successResponse(MESSAGE?.UPDATE_SUCCESSFUL));
        }
        else {
            return (await ERROR?.falseResponseAndMessage(MESSAGE?.UPDATE_FAILED));
        }
    }
    catch (error) {
        return await ERROR?.errorResponse(error);
    }
};