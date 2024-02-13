const { Note } = require("../../models/index");
const STATUS = require("../../static/core/status/status");
const MESSAGE = require("../../static/core/messages/noteMessage");
const SUCCESS = require("../../static/core/success/successMessage");
const ERROR = require("../../static/core/error/errors");

module.exports = async (noteData) => {
    try {
        const isNoteSaved = await Note.create(noteData);
        if (isNoteSaved === STATUS?.TRUE) {
            return (await SUCCESS?.successResponse(MESSAGE?.CREATE_SUCCESS));
        }
        else {
            return (await ERROR.falseResponseAndMessage(MESSAGE?.CREATE_FAILED));
        }
    }
    catch (error) {
        return (await ERROR?.errorResponse(error));
    }
};