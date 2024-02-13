const User=require("./User");
module.exports = (sequelize, DataTypes) => {
    const note = sequelize.define("note", {
        "id": {
            "type": DataTypes.STRING,
            "primaryKey": true
        },
        "userId": {
            "type": DataTypes.STRING,
            "allowNull": true,
            "references": {
                "model": User,
                "key": "id",
            }
        },
        "note": {
            "type": DataTypes.STRING,
            "allowNull": true
        },
        "noteDate": {
            "type": DataTypes.STRING,
            "allowNull": true
        }
    });
    return note;
}