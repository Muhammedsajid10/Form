const mongoose = require('mongoose')

const frmSchma = new mongoose.Schema({
    Name:{type:String},
    Age:{type:Number},
    Gender:{type:String},
    BloodGroup:{type:String},
    Mobile:{type:Number},
    Email:{type:String},
    Address:{type:String}
})

const formModel = mongoose.model("form",frmSchma)

module.exports = formModel;