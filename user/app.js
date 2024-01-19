const express=require("express");
const app=express();
app.use(express.json());
require("dotenv").config();
const PORT=process.env.PORT;
const dbConnection=require("./config/core/db/dburl");
const rootController=require("./routes/index")();
if(dbConnection){
    app.use("/api",rootController);
}

app.listen(PORT,()=>{
    console.log(`The server is listenning on http://localhost:${PORT}`);
});