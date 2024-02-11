const SERVICE = require("../../services/reminders/index");
const STATUS = require("../../static/core/status/status");
const MESSAGE = require("../../static/core/messages/userMessage");
const ERROR = require("../../static/core/error/errors");


module.exports = async (req, res, next) => {
    try {
        if (!USER) {
            res.json(await ERROR?.falseResponseAndMessage(MESSAGE?.UNAUTHORIZED));
        }
        else {
            const isGetAllReminders = await SERVICE?.GET_ALL(USER?.id);
            if (isGetAllReminders?.status === STATUS?.TRUE) {
                res.json(isGetAllReminders);
            }
            else {
                res.json(isGetAllReminders);
            }
        }
    }
    catch (error) {
        next(error);
    }
};