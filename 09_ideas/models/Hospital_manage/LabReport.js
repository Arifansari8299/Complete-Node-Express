const labReportSchema = new mongoose.schema({
    patientId: { type: mongooes.schema. Types.ObjectId, ref: "Patient"},
    testName: String,
    result: String,
    normalRange: String,
    date: { type: Date, default: Date.now}
});