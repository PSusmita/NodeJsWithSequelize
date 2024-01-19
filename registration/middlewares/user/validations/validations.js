const yup = require("yup");
const STATUS = require("../../../static/core/status/status");
const ERRORS = require("../../../static/core/error/errors");

async function uservalidaton(obj) {
    try {
        const validateUserSchema = yup.object({
            "id": yup.string().required(),
            "name": yup.string().required("Please enter your name").min(2),
            "email": yup.string().email().required("Please enter your email"),
            "password": yup.string().min(8).max(12).required("Please set your password")
        });
        await validateUserSchema.validate(obj);
        return STATUS?.TRUE;
    }
    catch (error) {
        return await ERRORS?.errorResponse(error);
    }
};

module.exports = { uservalidaton };