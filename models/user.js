// const { Schema, default: mongoose, models } = require("mongoose");

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
},{
    timestamps: true
}
);

const User = mongoose.models.user || mongoose.model("user",userSchema)
// models.User || mongoose.model('user',userSchema);
export default User;