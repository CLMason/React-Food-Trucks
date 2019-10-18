const mongoose = require("mongoose");
const ReviewSchema = require("./review");

const TruckSchema = new mongoose.Schema({
    name:{
        type:String, 
        required: [true, "Name is required"],
        minlength: [2, "Name must be 2 characters or longer"]
    },
    cuisine:{
        type:String, 
        required: [true, "Cuisine is required"],
        minlength: [3, "Cuisine must be 3 characters or longer"]
    }, 
    reviews: [ReviewSchema]
}, {timestamps:true});

mongoose.model("Truck", TruckSchema);