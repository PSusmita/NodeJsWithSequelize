const { Reminder } = require("../../models/index");
const STATUS = require("../../static/core/status/status");
const MESSAGE = require("../../static/core/messages/reminderMessage");
const ERROR = require("../../static/core/error/errors");

module.exports = async (page, limit, userId) => {
    try {
        let totalReminders = [];
        let isGetAllReminders = [];
        let tarnsformed = {};
        totalReminders = await Reminder.findAll({ "attributes": ["reminder", "reminderDate", "reminderTime"], "where": { "userId": userId } });

        isGetAllReminders = await Reminder.findAll({ "attributes": ["reminder", "reminderDate", "reminderTime"], "where": { "userId": userId }, "limit": parseInt(limit), "offset": ((parseInt(page) - 1) * parseInt(limit)) });
        if (isGetAllReminders && (isGetAllReminders instanceof Array && isGetAllReminders.length > STATUS?.ZERO)) {
            tarnsformed = {
                "page": page ? page : 1,
                "limit": limit ? limit : 10,
                "totalRows": totalReminders.length,
                "rows": isGetAllReminders
            };
            return ({ "status": STATUS?.TRUE, "reminders": tarnsformed });
        }
        else {
            tarnsformed = {
                "page": page ? page : 1,
                "limit": limit ? limit : 10,
                "totalRows": STATUS?.ZERO,
                "rows": isGetAllReminders
            };
            return ({ "status": STATUS?.TRUE, "reminders": tarnsformed });
        }
    }
    catch (error) {
        return await ERROR?.errorResponse(error);
    }
};