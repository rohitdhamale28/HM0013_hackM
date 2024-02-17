const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose= require("passport-local-mongoose");

// Search for passport ;
// passport-local-mongoose, it is a tool which already set iin builts code for user login 
// it's usefull for login and password and has inbuilt hash functions and salts

// passort automatically save a user name if we don't provide it
const userSchema= new Schema({
    email:{
       type: String,
       required: true,
    },
    type:{
        type:String,

     }
});


userSchema.plugin(passportLocalMongoose);

module.exports= mongoose.model("User",userSchema);