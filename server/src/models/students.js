import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    fullName:{type:String, required:true},
    userName:{type:String, required:true , unique:true},
    passWord:{type:String, required:true }
})

export const studentModel = mongoose.model("students",studentSchema);