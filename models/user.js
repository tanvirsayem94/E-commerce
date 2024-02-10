const { Schema, default: mongoose, models } = require("mongoose");

const userSchema = new Schema({
    name:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required: true,
    }
},{
    timestamps: true
}
);

const User = models.User || mongoose.model('user',userSchema);
export default User;