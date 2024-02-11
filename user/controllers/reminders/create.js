const crypto = require("crypto");
const AUTHSERVICE = require("../../services/user/auth/index");
const SERVICE = require("../../services/reminders/index");
const STATUS = require("../../static/core/status/status");
const MESSAGE = require("../../static/core/messages/userMessage");
const SUCCESSMESSAGE = require("../../static/core/success/successMessage");
const REMINDERMESSAGE = require("../../static/core/messages/reminderMessage");
const ERROR = require("../../static/core/error/errors");

module.exports = async (req, res, next) => {
    try {
        if (!USER) {
            res.json(await ERROR?.falseResponseAndMessage(MESSAGE?.UNAUTHORIZED));
        }
        else {
            const isExistUser = await AUTHSERVICE?.ISEXIST_ID(USER?.id);
            if (isExistUser === STATUS?.TRUE) {
                const reminderCreationData = {
                    "id": crypto.randomBytes(3).toString("hex"),
                    "userId": USER?.id,
                    "reminder": req?.body?.reminder,
                    "reminderDate":req?.body?.reminderDate,
                    "reminderTime": req?.body?.reminderTime
                }
                const isReminderSaved = await SERVICE?.CREATE(reminderCreationData);
                if (isReminderSaved === STATUS?.TRUE) {
                    res.json(await SUCCESSMESSAGE?.successResponse(REMINDERMESSAGE?.CREATED_SUCCESSFUL));
                }
                else {
                    res.json(await ERROR?.falseResponseAndMessage(REMINDERMESSAGE?.CREATION_FAILED));
                }
            }
            else {
                res.json({ "status": isExistUser, "message": MESSAGE?.UNEXISTED_USER });
            }
        }
    } catch (error) {
        next(error);
    }
};