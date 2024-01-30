const SERVICE = require("../../../services/user/auth/index");
const STATUS = require("../../../static/core/status/status");
const MESSAGE = require("../../../static/core/messages/userMessage");
const ERROR = require("../../../static/core/error/errors");

module.exports = async (req, res, next) => {
    try {
        if (!USER) {
            res.json(await ERROR?.falseResponseAndMessage(MESSAGE?.UNAUTHORIZED));
        }
        else {
            isUserExist = await SERVICE?.ISEXIST_ID(USER?.id);
            if (isUserExist === STATUS?.TRUE) {
                const updateFields = {
                    "name": req?.body?.name
                };
                const isUpdatedUser = await SERVICE?.UPDATE_PROFILE(USER?.id, updateFields);
                if (isUpdatedUser?.status === STATUS?.TRUE) {
                    res.json(isUpdatedUser);
                }
                else {
                    res.json(isUpdatedUser);
                }
            }
            else {
                res.json(await ERROR?.falseResponseAndMessage(MESSAGE?.UNEXISTED_USER));
            }
        }
    } catch (error) {
        next(error);
    }
};