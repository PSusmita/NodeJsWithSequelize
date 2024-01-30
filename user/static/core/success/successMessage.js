const STATUS = require("../status/status");
const MESSAGE = require("../messages/userMessage");
const ERROR = require("../error/errors");

async function successResponse(message) {
    try {
        return ({ "status": STATUS?.TRUE, "message": message });
    }
    catch (error) {
        return await ERROR?.errorResponse(error);
    }
};

module.exports = { successResponse };