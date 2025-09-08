const prescriptionSchema = new mongooe.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref : "Patient"},
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor"},
    date: {type:Date, default: Date.now},
    medicines: [
        {
            name:String,
            dosage:String,
            duration:String
        }
    ],
    notes:String
});