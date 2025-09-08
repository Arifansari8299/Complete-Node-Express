const appointmentSchema = new mongoose.Schema({
    patientId:{type:mongoose.Schema.Types.ObjectId, ref:"Patient"},
    doctorId:{type: mongoose.Schema.Types.ObjectId, ref: "Doctor"},
    appointmentDate: Date,
    status : { type:String,enum:["Scheduled","Completed","Cancelled"], default: "Scheduled"}

});