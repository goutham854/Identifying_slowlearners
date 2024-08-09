const mongoose=require("mongoose");
const contactSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: [true, 'Gmail is required']
    },
    message:{
        type:String
    }    
})

const Contact=mongoose.model('Contact',contactSchema);
module.exports=Contact;