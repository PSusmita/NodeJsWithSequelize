const { DataTypes } = require("sequelize");
const { Sequelize, sequelizeConnection } = require("../config/core/db/dburl");
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelizeConnection;
db.user = require("./User")(sequelizeConnection, DataTypes);
db.reminder = require("./Reminder")(sequelizeConnection, DataTypes);
db.sequelize.sync().then(() => {
    console.log("Tables have been created successfully.");
});
const User = db.user;
const Reminder = db.reminder;
module.exports = { User, Reminder };