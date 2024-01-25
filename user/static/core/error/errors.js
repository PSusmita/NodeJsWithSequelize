const STATUS = require("../status/status");

//*IF ANY CODE GET TO CACHE*//
async function errorResponse(error) {
    return {
        "status": STATUS?.FALSE,
        "message": `${error}`
    }
};

async function falseResponseAndMessage(message) {
    return{
        "status":STATUS?.FALSE,
        "message":`${message}`
    }
};

module.exports = { errorResponse, falseResponseAndMessage };