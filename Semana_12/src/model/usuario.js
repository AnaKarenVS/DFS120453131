const mongoose = require('mongoose'); 
const bcryp = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    nombreUsuario :{type: String , required : true}, 
    mail: {type: String, required: true}, 
    password : {type: String, required: true}
   }); 

   UserSchema.methods.encryptPassword = async pass => {
       const salt = await bcryp.genSalt(10); 
       return await bcryp.hash(pass, salt);
   }

   UserSchema.methods.matchPassword = async function(pass){
        return await bcryp.compare(pass, this.pass); 
   }

   module.exports = mongoose.model("User", UserSchema);