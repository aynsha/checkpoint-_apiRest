let mongoose= require('mongoose');

let userSchema= new mongoose.Schema({
    name: String,
    email: String,
    phone: Number, 
    
}, {timestamps: true});
const UserModel= mongoose.model('User', userSchema)
module.exports= UserModel;