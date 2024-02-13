const crypto = require("crypto");
const moment = require("moment");
const SERVICE = require("../../services/notes/index");
const STATUS = require("../../static/core/status/status");
const MESSAGE = require("../../static/core/messages/userMessage");
const ERROR = require("../../static/core/error/errors");

module.exports = async (req, res, next) => {
    try {
        if (!USER) {
            res.json(await ERROR?.falseResponseAndMessage(MESSAGE?.UNAUTHORIZED));
        }
        else {
            const noteCreationData = {
                "id": crypto.randomBytes(5).toString("hex"),
                "userId": USER?.id,
                "note": req?.body?.note,
                "noteDate": moment().format("DD-MM-YYYY")
            };
            const isNoteSaved = await SERVICE?.CREATE(noteCreationData);
            if (isNoteSaved?.status === STATUS?.TRUE) {
                res.json(isNoteSaved);
            }
            else {
                res.json(isNoteSaved);
            }
        }
    }
    catch (error) {
        next(error);
    }
};

