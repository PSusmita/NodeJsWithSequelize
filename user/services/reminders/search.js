const { Op } = require("sequelize");
const { Reminder } = require("../../models/index");
const STATUS = require("../../static/core/status/status");
const ERROR = require("../../static/core/error/errors");

module.exports = async (page, limit, userId, searchKey) => {
    try {
        let totalReminders = [];
        let isGetAllReminders = [];
        let tarnsformed = {};
        totalReminders = await Reminder.findAll({
            "attributes": ["id", "reminder", "reminderDate", "reminderTime"], "where": {
                "userId": userId, [Op.or]: [{
                    "reminder": { [Op.iLike]: `%${searchKey}%` }
                }]
            }
        });
        isGetAllReminders = await Reminder.findAll({
            "attributes": ["id", "reminder", "reminderDate", "reminderTime"], "where": {
                "userId": userId,
                [Op.or]: [
                    { "reminder": { [Op.iLike]: `%${searchKey}%` } }
                ]
            }, "limit": parseInt(limit), "offset": ((parseInt(page) - 1) * parseInt(limit))
        });

        if (isGetAllReminders && (isGetAllReminders instanceof Array && isGetAllReminders.length > STATUS?.ZERO)) {
            tarnsformed = {
                "page": page ? page : 1,
                "limit": limit ? limit : 10,
                "totalRows": totalReminders.length,
                "rows": isGetAllReminders
            };
            return ({ "status": STATUS?.TRUE, "searchData": tarnsformed });
        }
        else {
            tarnsformed = {
                "page": page ? page : 1,
                "limit": limit ? limit : 10,
                "totalRows": STATUS?.ZERO,
                "rows": isGetAllReminders
            };
            return ({ "status": STATUS?.TRUE, "searchData": tarnsformed });
        }
    }
    catch (error) {
        return (await ERROR?.errorResponse(error));
    }
};