const { kMaxLength } = require("buffer");
const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://shivanisamant981:shivani@cluster0.hbzmvqh.mongodb.net/")

const UserSchema=mongoose.Schema({
    Username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        mingLength:3,
        maxLength:30,

    },
    password:{
        type:String,
        required:true,
        minLength:6,
    },
    firstname:{
        type:String,
        required:true,
        trim:true,
        maxLength:50,
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
        maxLength:50,
    }

})

const User=mongoose.model("Users",UserSchema);
module.exports={User,

}