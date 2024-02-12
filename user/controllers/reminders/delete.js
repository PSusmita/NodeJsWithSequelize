const SERVICE=require("../../services/reminders/index");
const STATUS=require("../../static/core/status/status");
const MESSAGE=require("../../static/core/messages/userMessage");
const ERROR=require("../../static/core/error/errors");

module.exports=async(req,res,next)=>{
    try{
        if(!USER){
            res.json(ERROR?.falseResponseAndMessage(MESSAGE?.UNAUTHORIZED));
        }
        else{
            
        }
    }
    catch(error){
        next(error);
    }
};