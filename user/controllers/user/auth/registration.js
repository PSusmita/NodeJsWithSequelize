const crypto = require("crypto");
const SERVICE = require("../../../services/user/auth/index");
const VALIDATOR = require("../../../middlewares/user/validations/userDataValidations");
const STATUS = require("../../../static/core/status/status");
const MESSAGE = require("../../../static/core/messages/message");
const STATUSCODE = require("../../../static/core/statuscode/statusCode");
const ERROR = require("../../../static/core/error/errors");

module.exports = async (req, res, next) => {
   try {
      const userData = {
         "id": crypto.randomBytes(4).toString("hex"),
         "name": req?.body?.name,
         "email": req?.body?.email,
         "password": req?.body?.password
      };
      const isUserDataValidated = await VALIDATOR?.uservalidaton(userData);
      if (isUserDataValidated) {
         const isExistedUser = await SERVICE?.ISEXIST_USER(userData?.email);
         if (isExistedUser && isExistedUser === STATUS?.TRUE) {
            res.json(await ERROR.falseResponseAndMessage(MESSAGE?.EXISTED_USER));
         }
         else {
            const isDataSaved = await SERVICE?.REGISTRATION(userData);
            if (isDataSaved) {
               res.status(STATUSCODE?.CREATE_CODE).json({ "status": STATUS?.TRUE, message: MESSAGE?.REG_SUCCESS });
            }
            else {
               res.json({ "status": STATUS?.FALSE, message: MESSAGE?.REG_FAILED });
            }
         }
      }
      else {
         res.json(isUserDataValidated);
      }
   }
   catch (error) {
      next(error);
   }
};
