const { Reminder } = require("../../models/index");
const STATUS = require("../../static/core/status/status");
const ERROR = require("../../static/core/error/errors");

module.exports = async (id) => {
    try {

    } catch (error) {
        return await ERROR?.errorResponse(error);
    }
};