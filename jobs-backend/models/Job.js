const mongoose = require("mongoose");
const {isEmail} = require('express-validator').check();

// create schema

const JobSchema = new mongoose.Schema({
    postDate: {
        type: Date,
        required: [true, "Date can not be empty."],
        default: () => ( new Date() )
    },
    title: {
        type: String,
        require: [true, "title can not be empty."],
        maxlength: [30, 'Last name is more than 30 characters.'],
        trim: true
    },
    location: {
        type: String,
        require: [true, "location can not be empty"],
        maxlength: [30, 'location is more than 30 characters.'],
        trim: true,
        default: null,
    },
    type: {
        type: String,
        trim: true,
        required: [true, "Job Type can not be empty."],
        maxlength: [20, 'Last name is more than 20 characters.']
    },
    aboutRole:{
        type: String,
        required: [true, "about can not be empty."],
        maxlength: [300, 'about is more than 200 characters.']
    },
    responsibility:{
        type: [String],
        default: undefined
    },
    offers:{
        type: String,
        required: [true, "offers can not be empty."],
        maxlength: [300, 'Its more than 200 characters.']
    },
    perks:{
        type: [String],
        default: undefined
    },
    employer_name: {
        type: String,
        require: [true, "employer_name can not be empty."],
        maxlength: [50, 'employer_name is more than 50 characters.'],
        trim: true
    },
    employer_phone: {
        type: String,
        required: [true, "phone can not be empty."],
        maxlength: [10, 'phone is more than 10 characters.'],
        trim: true
    },
    employer_email: {
        type: String,
        trim: true,
        required: [true, "Email can not be empty."],
        validate: [isEmail, 'invalid Email']
    },

}) 



module.exports = mongoose.model('Job', JobSchema);
