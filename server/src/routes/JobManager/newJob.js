import express from "express";
import { jobManagerModel } from "../../models/jobManagers.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { postedJobsModel } from "../../models/postedJobs.js";
//use http://localhost:3002/newjob

const router = express.Router();

router.get("/", async function (req, res) {
   
})


router.post("/", async function (req, res) { // this post is meant for jobmanager this is for testing purposes
    const { jmid,title } = req.body;
    const newPostedJob = new postedJobsModel({
        jmid: jmid,
        jid: "6458d3011f79e72a67eabd3e",
        title: title
    });
    await newPostedJob.save();
    console.log(newPostedJob + "saved new job");
    res.json({ message: "saved new job successfully", job: newPostedJob });
})







export { router as newJob };