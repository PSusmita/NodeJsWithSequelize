const { User } = require("../../../models/index");
const STATUS = require("../../../static/core/status/status");
const ERROR = require("../../../static/core/error/errors");

module.exports = async (userId) => {
    try {
        const isIdExisted = await User.findOne({ "where": { "id": userId } });
        if (isIdExisted) {
            return STATUS?.TRUE;
        }
        else {
            return STATUS?.FALSE;
        }
    } catch (error) {
        return await ERROR?.errorResponse(error);
    }
};