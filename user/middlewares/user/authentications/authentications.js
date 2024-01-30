const JWT = require("jsonwebtoken");
require("dotenv").config();
const STATUS = require("../../../static/core/status/status");
const MESSAGE = require("../../../static/core/messages/userMessage");
const ERROR = require("../../../static/core/error/errors");
async function verifyUserToken(req, res, next) {
    try {
        if (req.headers.authorization) {
            const [scheme, token] = req.headers.authorization.split(" ");
            if (scheme !== "Bearer" || !token) { return res.json({ "status": STATUS?.FALSE, "message": MESSAGE?.UNAUTHORIZED }); }
            else {
                const result = JWT.verify(token, process?.env?.SECRET_KEY);
                if (result) {
                    result["token"] = token;
                    USER = result;
                    next();
                }
                else {
                    return res.json({ "status": STATUS?.FALSE, "message": MESSAGE?.UNAUTHORIZED });
                }

            }
        }
        else {
            return res.json({ "status": STATUS?.FALSE, "message": MESSAGE?.UNAUTHORIZED });
        }
    }
    catch (error) {
        res.json(await ERROR?.errorResponse(error));
    }
}
module.exports = { verifyUserToken };