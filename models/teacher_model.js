const mongoose=require("mongoose");
const teacherSchema= new mongoose.Schema({
    t_id:{
        type:String,
        required:true
    },
    t_branch:{
        type:String,
        required:true
    },
    t_name:{
        type:String
    }    
})

const Teacher=mongoose.model('Teacher',teacherSchema);
module.exports=Teacher;