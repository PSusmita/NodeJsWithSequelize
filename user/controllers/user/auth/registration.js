const crypto = require("crypto");
const SERVICE = require("../../../services/user/auth/index");
const VALIDATOR = require("../../../middlewares/user/validations/userDataValidations");
const STATUS = require("../../../static/core/status/status");
const MESSAGE = require("../../../static/core/messages/message");
const STATUSCODE = require("../../../static/core/statuscode/statusCode");
module.exports = async (req, res, next) => {
   try {
      const userData = {
         "id": crypto.randomBytes(4).toString("hex"),
         "name": req?.body?.name,
         "email": req?.body?.email,
         "password": req?.body?.password
      };
      const isUserDataValidated = await VALIDATOR?.uservalidaton(userData);
      if (isUserDataValidated === STATUS?.TRUE) {
         const isDataSaved = await SERVICE?.REGISTRATION(userData);
         if (isDataSaved === STATUS?.TRUE) {
            res.status(STATUSCODE?.CREATE_CODE).json({ "status": STATUS?.TRUE, message: MESSAGE?.REG_SUCCESS });
         }
         else {
            res.json({ "status": STATUS?.FALSE, message: MESSAGE?.REG_FAILED });
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
