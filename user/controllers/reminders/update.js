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
            const isExistReminder = await SERVICE?.IS_EXIST_ID(req?.body ? req?.body?.id : null);
            if (isExistReminder?.status === STATUS?.TRUE) {
                const updateFields = { ...req.body };
                delete updateFields?.id;
                const isUpdatedReminder = await SERVICE?.UPDATE(req?.body ? req?.body?.id : null, updateFields);
                if (isUpdatedReminder?.status === STATUS?.TRUE) {
                    res.json(isUpdatedReminder);
                }
                else {
                    res.json(isUpdatedReminder);
                }
            }
            else {
                res.json(isExistReminder);
            }
        }
    }
    catch (error) {
        next(error);
    }
};