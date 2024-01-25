
const VALIDATOR = require("../../../middlewares/user/validations/userDataValidations");
const STATUS = require("../../../static/core/status/status");
const SERVICE = require("../../../services/user/auth/index");


module.exports = async (req, res, next) => {
    try {
        const loginData = {
            "email": req.body?.email,
            "password": req?.body?.password
        };
        const isLoginDataValidated = await VALIDATOR?.loginDataValidation(loginData);
        if (isLoginDataValidated) {
            const isExistedUser = await SERVICE?.ISEXIST_USER(loginData?.email);
            if (isExistedUser && isExistedUser === STATUS?.TRUE) {
                const isLogin = await SERVICE?.LOGIN(loginData);
                if (isLogin?.status) {
                    res.json(isLogin);
                }
                else {
                    res.json(isLogin);
                }
            }
            else {
                res.json(isExistedUser);
            }

        }
        else {
            res.json(isLoginDataValidated);
        }
    }
    catch (error) {
        next(error);
    }
};