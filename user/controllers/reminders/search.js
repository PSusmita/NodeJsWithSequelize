const SERVICE = require("../../services/reminders/index");
const STATUS = require("../../static/core/status/status");
const MESSAGE = require("../../static/core/messages/userMessage");
const ERROR = require("../../static/core/error/errors");

module.exports = async (req, res, next) => {
    try {
        if (!USER) {
            res.json(await ERROR?.falseResponseAndMessage(MESSAGE.UNAUTHORIZED));
        }
        else {
            const isSearchReminderExist = await SERVICE?.SEARCH(req?.query?.page ? req?.query?.page : 1, req?.query?.limit ? req?.query?.limit : 10, USER?.id, req?.query?.q);
            if (isSearchReminderExist?.status === STATUS?.TRUE) {
                res.json(isSearchReminderExist?.searchData);
            }
            else {
                res.json(isSearchReminderExist?.searchData);
            }
        }
    }
    catch (error) {
        next(error);
    }
};