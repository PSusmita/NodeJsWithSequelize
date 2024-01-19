
module.exports = (sequelize, DataTypes) => {
   const user=sequelize.define("user", {
        "id": {
            "type": DataTypes.STRING,
            "primaryKey": true
        },
        "name": DataTypes.STRING,
        "email": DataTypes?.STRING,
        "password": DataTypes?.STRING
    });
    return user;
};
