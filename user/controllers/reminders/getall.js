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
            const isGetAllReminders = await SERVICE?.GET_ALL(req?.query?.page ? req?.query?.page : 1, req?.query?.limit ? req?.query?.limit : 10, USER?.id);
            if (isGetAllReminders?.status === STATUS?.TRUE) {
                res.json(isGetAllReminders?.reminders);
            }
            else {
                res.json(isGetAllReminders?.reminders);
            }
        }
    }
    catch (error) {
        next(error);
    }
};