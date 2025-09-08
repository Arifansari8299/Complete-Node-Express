const patientSchema = new mongoose.Schema({
    name:String,
    age:Number,
    gender:String,
    contact:String,
    address:String,
    admissionDate: { type: Date, default: Date.now},
    doctorId: {type:mongoose.Schema.Types.ObjectId, ref: "Doctor"}
});