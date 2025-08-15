const mongoose = require("mongoose")

const ResumeSchema = new mongoose.Schema({
    originalName:{
        type:String,
        required:true
    },
    fileName:{
        type:String,
        required:true
    },
    size:{
      type:String,
      required:true
    },
    mimetype:{
        type:String,
        required:true
    },
    ext:{
        type:String,
        required:true
    },
    uploadedAT:{
        type:Date,
        default:Date.now
    }
})
module.exports = mongoose.model('Resume',ResumeSchema)