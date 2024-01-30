const { Reminder } = require("../../models/index");
const STATUS = require("../../static/core/status/status");
const ERROR = require("../../static/core/error/errors");

module.exports = async (reminderCreationData) => {
    try {
        const isDataSaved = await Reminder.create(reminderCreationData);
        if (isDataSaved === STATUS?.TRUE) {
            return (STATUS?.TRUE);
        }
        else {
            return (STATUS?.FALSE);
        }
    } catch (error) {
        return await ERROR?.errorResponse(error)
    }
};