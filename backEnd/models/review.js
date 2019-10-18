const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    name:{
        type:String, 
        required: [true, "Name is required"],
        minlength: [2, "Name must be 2 characters or longer"]
    },
    rating:{
        type:Number, 
        required: [true, "Rating is required"],
    }, 
    comment:{
        type:String, 
        required: [true, "Comment is required"],
        minlength: [10, "Name must be 10 characters or longer"]
    }
}, {timestamps:true});

// our truck will have reviews which will be composed of objects that look like that review
// we're going to be storing them in the trucks themselves
module.exports = ReviewSchema;