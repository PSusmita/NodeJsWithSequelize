const STATUS=require("../status/status");

//*IF ANY CODE GET TO CACHE*//
async function errorResponse(error) {
    return {
        "status": STATUS?.FALSE,
        "message": `${error}`
    }
};

module.exports = { errorResponse };