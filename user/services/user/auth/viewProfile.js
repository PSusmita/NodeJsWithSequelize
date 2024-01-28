const { User } = require("../../../models/index");
const STATUS = require("../../../static/core/status/status");
const MESSAGE = require("../../../static/core/messages/message");
const ERROR = require("../../../static/core/error/errors");

module.exports = async (userId) => {
    try {
        const isUserDetails = await User.findOne({ "where": { "id": userId } });
        if (isUserDetails === null) {
            return ({ "status": STATUS?.FALSE, "message": MESSAGE?.UNEXISTED_USER });
        }
        else {
            return ({ "status": STATUS?.TRUE, "user": isUserDetails?.dataValues });

        }
    } catch (error) {
        return await ERROR?.errorResponse(error);
    }
};