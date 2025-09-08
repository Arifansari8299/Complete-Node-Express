const medicalRecordSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient"},
    diagnosis: String,
    allergies: [String],
    history : String,
    addedOn: { type:Date, default: Date.now}
});