const { User, Note } = require("../../../models/index");
const STATUS = require("../../../static/core/status/status");
const ERROR = require("../../../static/core/error/errors");

module.exports = async (page, limit, userId) => {
    try {
        const transformed = {};
        const totalNotes = await Note.count({ "where": { "userId": userId } });
        const note = await Note.findAll({
            "where": { "userId": userId },
            "include": [{
                "model": User,
                "attributes": ["id", "name"]
            }],
            "attributes": ["id", "note"],
            "limit": limit ? parseInt(limit) : 10,
            "offset": (page && limit) ? ((parseInt(page) - 1) * parseInt(limit)) : STATUS?.ZERO
        });

        if (note && note instanceof Array && note.length > STATUS?.ZERO) {
            const obj = {
                "status": STATUS?.TRUE,
                "page": page ? parseInt(page) : 1,
                "totalRows": totalNotes ? totalNotes : STATUS?.ZERO,
                "rows": note ? note : []
            };
            Object.assign(transformed, obj);
        }
        else {
            const obj = {
                "status": STATUS?.FALSE,
                "page": page ? parseInt(page) : 1,
                "totalRows": totalNotes ? totalNotes : STATUS?.ZERO,
                "rows": note ? note : []
            };
            Object.assign(transformed, obj);
        }
        return (transformed);
    }
    catch (error) {
        return (await ERROR?.errorResponse(error));
    }
};