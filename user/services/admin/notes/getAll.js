const { User, Note } = require("../../../models/index");
const STATUS = require("../../../static/core/status/status");
const ERROR = require("../../../static/core/error/errors");

module.exports = async (page, limit, userId) => {
    try {
        let transformed = {};
        const totalNotes = await Note.count({ "where": { "userId": userId } });
        const note = await Note.findAll({
            "where": { "userId": userId },
            "include": [{
                "model": User,
                "attributes": ["id", "name"]
            }],
            "attributes": ["id", "note"],
            "limit": limit ? parseInt(limit) : 10,
            "offset": page && limit ? ((parseInt(page) - 1) * parseInt(limit)) : 0
        });

        if (note && (note instanceof Array && note.length > STATUS?.ZERO)) {
            transformed = {
                "page": page ? parseInt(page) : 1,
                "totalRows": totalNotes ? totalNotes : 0,
                "rows": note ? note : []
            };
            return ({ "status": STATUS?.TRUE, "notes": transformed });
        }
        else {
            transformed = {
                "page": page ? parseInt(page) : 1,
                "totalRows": totalNotes ? totalNotes : 0,
                "rows": note ? note : []
            };
            return ({ "status": STATUS?.TRUE, "notes": transformed });
        }
    }
    catch (error) {
        return (await ERROR?.errorResponse(error));
    }
};