import mongoose from "mongoose";

const postedJobsSchema = new mongoose.Schema({
    jmid:{type: mongoose.Schema.Types.ObjectId, ref: 'jobManagers',required:true},
    jid:{type: mongoose.Schema.Types.ObjectId, ref: 'jobs',required:true},
    isExpired:{type:Boolean, required:true, default:false },
    title:{type:String}

    
},
{ collection: "postedJobs" }
)

export const postedJobsModel = mongoose.model("postedJobs",postedJobsSchema);