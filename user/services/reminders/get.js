const { Reminder } = require("../../models/index");
const STATUS = require("../../static/core/status/status");
const REMINDERMESSAGE = require("../../static/core/messages/reminderMessage");
const ERROR = require("../../static/core/error/errors");

module.exports = async (reminderId) => {
    try {
        const isExistReminder = await Reminder.findOne({ "where": { "id": reminderId }, "attributes": ["id", "reminder", "reminderDate", "reminderTime"] });
        if (isExistReminder) {
            return ({ "status": STATUS?.TRUE, "reminder": isExistReminder?.dataValues });
        }
        else {
            return await ERROR?.falseResponseAndMessage(REMINDERMESSAGE?.NOT_EXIST);
        }

    } catch (error) {
        return await ERROR?.errorResponse(error);
    }
};