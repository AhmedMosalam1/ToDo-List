const mongoose=require("mongoose")
const Schema=mongoose.Schema

const taskschema = new Schema({
    task:{
        type:String,
        required:[true,"task is required"],
    },
});



//create model

const task=mongoose.model("task",taskschema);


//export model

module.exports=task;
