const { Reminder } = require("../../models/index");
const STATUS = require("../../static/core/status/status");
const MESSAGE = require("../../static/core/messages/reminderMessage");
const ERROR = require("../../static/core/error/errors");


module.exports = async (userId) => {
    try {
        const isGetAllReminders = await Reminder.findAll({ "where": { "userId": userId } }, { "attributes": ["reminder", "reminderDate", "reminderTime"] });
        if (isGetAllReminders) {
            return ({ "status": STATUS?.TRUE, "reminders": isGetAllReminders?.dataValues });
        }
        else {
            return (await ERROR?.falseResponseAndMessage(MESSAGE?.NOT_EXIST));
        }
    }
    catch (error) {
        return await ERROR?.errorResponse(error);
    }
};