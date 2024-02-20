const SERVICE = require("../../../services/admin/auth/index");
const STATUS = require("../../../static/core/status/status");

module.exports = async (req, res, next) => {
    try {
        const registerData = {
            "email": req?.body?.email,
            "password": req?.body?.password
        };

        const isRegister = await SERVICE?.REGISTER(registerData);
        if (isRegister?.status === STATUS?.TRUE) {
            res.json(isRegister);
        }
        else {
            res.json(isRegister);
        }
    }
    catch (error) {
        next(error);
    }
};