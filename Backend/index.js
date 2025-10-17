const express=require("express");
const mongoose=require("mongoose");
const app=express();


const dbconnect=async()=>{
    try{
        await mongoose.connect(process.env.MongoDB_URL)
        console.log("connected successfully");
        

    }catch(err){
        console.log(err);

    }

}

app.listen(3000,async()=>{
    await dbconnect();
    
})



