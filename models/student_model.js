const mongoose=require("mongoose");

const studentSchema=new mongoose.Schema({
    s_id:{
        type:String,
        lowercase:true,
        required:true
    },
    s_name:{
        type:String,
        lowercase:true,
        required:true
    },
    s_branch:{
        type:String,
        lowercase:true,
        required:true
    },
    s_10thmarks:
    {
        type:Number,
        required:true
    },
    s_intermarks:{
        type:Number,
        required:true
    },
    s_cgpa:{
        type:Number,
        required:true
    },
    s_achievements:{
        lowercase:true,
        type:String
    },
    s_projects:{
        lowercase:true,
        type:String
    },
    s_interests:{
        lowercase:true,
        type:String
    }
})

const Student=mongoose.model('Student',studentSchema);
module.exports=Student;