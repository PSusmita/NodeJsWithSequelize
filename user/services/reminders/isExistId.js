const { Reminder } = require("../../models/index");
const STATUS = require("../../static/core/status/status");
const MESSAGE = require("../../static/core/messages/reminderMessage");
const ERROR = require("../../static/core/error/errors");

module.exports = async (reminderId) => {
    try {
        if (await Reminder.findOne({ "where": { "id": reminderId } })) {
            return ({ "status": STATUS?.TRUE });
        }
        else {
            return (await ERROR?.falseResponseAndMessage(MESSAGE?.NOT_EXIST));
        }

    }
    catch (error) {
        return (await ERROR?.errorResponse(error));
    }
};