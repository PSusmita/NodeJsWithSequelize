module.exports = (sequelize, DataTypes) => {
    const reminder = sequelize.define("reminder", {
        "id": {
            "type": DataTypes.STRING,
            "primaryKey": true
        },
        "userId": {
            "type": DataTypes.STRING,
            "allowNull": true,
            "references": {
                "model": "users",
                "key": "id",
            }
        },
        "reminder": {
            "type": DataTypes.STRING,
            "allowNull": true
        },
        "reminderDate": {
            "type": DataTypes.STRING,
            "allowNull": true
        },
        "reminderTime": {
            "type": DataTypes?.STRING,
            "allowNull": true
        }
    });
    return reminder;
}