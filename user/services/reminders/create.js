
const STATUS = require("../../static/core/status/status");
const MESSAGE = require("../../static/core/messages/message");
const ERROR = require("../../static/core/error/errors");

module.exports = async () => {
    try {

    } catch (error) {
        return await ERROR?.errorResponse(error)
    }
};