const JWT = require("jsonwebtoken");
const STATUS = require("../../../static/core/status/status");
const MESSAGE = require("../../../static/core/messages/message");
const ERROR = require("../../../static/core/error/errors");
require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY;

async function generateToken(payloadData) {
    try {
        const payload = await returnPayloadData(payloadData);
        const isGeneratedToken = JWT.sign(payload, SECRET_KEY);
        if (isGeneratedToken) {
            return ({ "status": STATUS?.TRUE, "token": isGeneratedToken });
        }
        else {
            return ERROR?.falseResponseAndMessage(MESSAGE?.DEGENERATED_TOKEN);
        }
    }
    catch (error) {
        return ERROR?.errorResponse(error);
    }
};

async function returnPayloadData(payloadData) {
    try {
        const payload = {
            "id": payloadData?.id,
            "email": payloadData?.email
        };
        return payload;
    }
    catch (error) {
        return ERROR?.errorResponse(error);
    }
}

module.exports = { generateToken };