const { sequelize } = require("sequelize");
const { User } = require("../../../models/index");
const STATUS = require("../../../static/core/status/status");
const MESSAGE=require("../../../static/core/messages/message");
const ERROR = require("../../../static/core/error/errors");
require("dotenv").config();

module.exports = async (email) => {
    try {
        if (email) {
            const isExisted=await User.findOne({"where":{"email":email}});
            if(isExisted){
                return(STATUS?.TRUE);
            }
            else{
                return await ERROR?.falseResponseAndMessage(MESSAGE?.UNEXISTED_USER);
            }
        }
    }
    catch (error) {
        return await ERROR?.errorResponse(error);
    }
}