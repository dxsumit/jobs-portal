
const router = require("express").Router();
require("dotenv").config();
const {check, validationResult} = require('express-validator'); // middleware for validation of fields..
const mongoose = require("mongoose");
const Job = require('../models/Job');


router.get('/', (req,res) => {
    res.status(200).json({status: "success", msg: "This is jobs api"}); 
});


// add new job..
router.post('/add', async (req, res) => {

    try{

        const {title, location, type, aboutRole, responsibility, offers, perks, employer_name, employer_phone, employer_email} = req.body

        if( !(title && location && type && aboutRole && responsibility && offers && perks && employer_name && employer_phone && employer_email))
            return res.status(400).json({status: "error", msg: "All fields are required.."});


        const newData = new Job({
            title, 
            location, 
            type, 
            aboutRole, 
            responsibility, 
            offers, 
            perks, 
            employer_name, 
            employer_phone, 
            employer_email
        })
 
        // save user in database..
        await newData.save()

        res.status(201).json({status: 'successful', msg: newData});

    }
    catch(err){
        res.status(500).json({status: 'failed', msg: err});
    }
})


// get all jobs
router.get('/get', async (req, res) => {

    try{
        const allJobs = await Job.find();
        res.status(200).json({status: 'successful', msg: allJobs});
    }
    catch(err){
        res.status(500).json({status: 'failed', msg: err});
    }
})

// get only few fields in jobs
router.get('/getfields', async (req, res) => {

    try{
        const allJobs = await Job.find().select({"title":1, "location":1, "type":1, "aboutRole":1});
        res.status(200).json({status: 'successful', msg: allJobs});
    }
    catch(err){
        res.status(500).json({status: 'failed', msg: err});
    }
})


// find a job in table..
router.get('/find/:id', async (req, res) => {

    try{
        const {id} = req.params;
        // access the unique job
        const foundJob = await Job.findOne({_id:id});
        if(!foundJob)
            return res.status(404).json({status: 'failed', msg: 'ID not found.'});
        
        res.status(200).json({status: 'successful', msg: foundJob});
    }
    catch(err){
        res.status(500).json({status: 'failed', msg: err});
    }
})


// delete a job..
router.delete('/delete/:id', async(req, res) => {
    try{
        const {id} = req.params;
        //find and delete
        const foundJob = await Job.findOneAndDelete({_id: id})
        if(!foundJob)
            return res.status(404).json({status: 'failed', msg: 'ID not found.'});

        res.status(200).json({status: 'successful', msg: foundJob});
    }
    catch(err){
        res.status(500).json({status: 'failed', msg: err});
    }
})


// patch the job
router.patch('/update/:id', async(req, res) => {
    try{
        const {id} = req.params;
        // find and update the task in the table
        const updatedTask = await Job.findOneAndUpdate({_id: id}, req.body, {
            new: true,
            runValidators: true
        })

        if(!updatedTask){
            return res.status(404).json({status: 'failed', msg: 'ID not found.'});
        }
        res.status(200).json({status: 'successful', msg: updatedTask});

    }
    catch {
        res.status(500).json({status: 'failed', msg: err});
    }
})




module.exports = router



