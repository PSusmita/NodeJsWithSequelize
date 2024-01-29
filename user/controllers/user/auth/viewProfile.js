const SERVICE = require("../../../services/user/auth/index");
const STATUS = require("../../../static/core/status/status");
const MESSAGE = require("../../../static/core/messages/message");
const ERROR = require("../../../static/core/error/errors");

module.exports = async (req, res, next) => {
    try {
        if (!USER) {
            res.json(await ERROR?.falseResponseAndMessage(MESSAGE?.UNAUTHORIZED));
        }
        else {
            const isExistUser = await SERVICE?.ISEXIST_ID(USER.id);
            if (isExistUser === STATUS?.TRUE) {
                const getUserDetails = await SERVICE?.VIEW_PROFILE(USER.id);
                if (getUserDetails?.status === STATUS?.TRUE) {
                    res.json(getUserDetails);
                }
                else {
                    res.json(getUserDetails);
                }
            }
        }
    } catch (error) {
        next(error);
    }
};