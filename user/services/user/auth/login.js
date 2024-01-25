const { sequelize } = require("sequelize");
const bcrypt = require("bcrypt");
const { User } = require("../../../models/index");
const AUTHSERVICE = require("./index");
const GENERATOR = require("../../../middlewares/user/authentications/generateToken");
const STATUS = require("../../../static/core/status/status");
const MESSAGE = require("../../../static/core/messages/message");
const ERROR = require("../../../static/core/error/errors");
require("dotenv").config();

module.exports = async (loginData) => {
    try {
        const getUser = await User.findOne({ "where": { "email": loginData?.email } });
        const isExistPassWord = await AUTHSERVICE.CHECK_PASSWORD(loginData?.password, getUser?.password);
        if (isExistPassWord) {
            const isGeneratedToken = await GENERATOR?.generateToken(getUser);
            if(isGeneratedToken?.status){
                let userLoginObj={
                    "status":STATUS?.TRUE,
                    "id":getUser?.id,
                    "email":getUser?.email,
                    "token":isGeneratedToken?.token,
                    "messsage":MESSAGE?.LOGIN_SUCCESS
                }
                return userLoginObj;
            }
            else{
                return(isGeneratedToken);
            }
        }
        else {
            return await ERROR?.falseResponseAndMessage(MESSAGE?.INVALID_PASSWORD);
        }
    }
    catch (error) {
        return await ERROR.errorResponse(error);
    }
};

async function returnLoginData(getUser,accessToken) {
    try {

    }
    catch (error) {
        return await ERROR.errorResponse(error);
    }
};