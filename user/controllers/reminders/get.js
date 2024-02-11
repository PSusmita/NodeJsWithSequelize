const SERVICE = require("../../services/reminders/index");
const STATUS = require("../../static/core/status/status");
const ERROR = require("../../static/core/error/errors");

module.exports = async (req, res, next) => {
    try {
        if (!USER) {
            res.json(await ERROR?.falseResponseAndMessage(MESSAGE?.UNAUTHORIZED));
        }
        else {
            const isGetReminder = await SERVICE?.GET(req?.params ? req?.params?.id : null);
            if (isGetReminder?.status === STATUS?.TRUE) {
                res.json(isGetReminder);
            }
            else {
                res.json(isGetReminder);
            }
        }
    } catch (error) {

    }
};