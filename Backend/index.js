const express=require("express");
const mongoose=require("mongoose");
const app=express();
const dotenv=require("dotenv")
dotenv.config();

const dbconnect=async()=>{
    try{
        await mongoose.connect(process.env.MongoDB_URL)
        console.log("connected successfully");
        

    }catch(err){
        console.log(err);

    }

}

app.listen(process.env.PORT,async()=>{
    await dbconnect();
    console.log("the server is running on port "+process.env.PORT);
    
})



