const {Sequelize,DataTypes}=require("sequelize");
const mysql=require("mysql2/promise");
require("dotenv").config();
const DB_NAME=process?.env?.DB_NAME;
const USER=process?.env?.DB_USER;
const PASSWORD=process?.env?.DB_PASSWORD;
const HOST=process?.env?.DB_HOST;
const DB_DIALECT=process?.env?.DB_DIALECT;

async function initDBConnection(){
    try{
       const connection=await mysql.createConnection({
        "host":HOST,
        "user":USER,
        "password":PASSWORD
       });
       return await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;`);
    }
    catch(error){
        return {
             "message":`${error}`
        }
    }
}
initDBConnection(); //If Database is not present then this function will create a new db;


const sequelizeConnection=new Sequelize(DB_NAME,USER,PASSWORD,{
    "host":HOST,
    "dialect":DB_DIALECT,
    "logging":false,// To stop logging of every table creation message
    "pool":{"max":5,"min":0,"idle":10000}
});

sequelizeConnection.authenticate().then(()=>{
    console.log(`Database is connected successfully`);
}).catch(error=>{
    console.log(`Error:${error}`);
});

module.exports={Sequelize,sequelizeConnection};