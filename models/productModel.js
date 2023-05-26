import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    Product_Id:{
        type:String,
        required:[true,"Please provide Product Id"],
        unique:[true,"Given Product Id Already Exists"]
    },
    Name:{
        type:String,
        required:[true,"Please provide Product Name"],
    },
    Price:{
        type:Number,
        required:[true,"Please provide Product Price"],
    },
    Featured:{
        type:Boolean,
        default:false,
    },
    Rating:{
        type:Number,
    },
    Created_At:{
        type:String,
        required:[true,"Please Provide Date of Product Creation"],
    },
    Company:{
        type:String,
        required:[true,"Please provide Company Name"],
    }

});

export const Product = mongoose.model("Product",productSchema);