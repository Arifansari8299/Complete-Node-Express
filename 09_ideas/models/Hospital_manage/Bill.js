const billSchema = new mongoose.Schema({
    patientId:{ type: mongoose.Schema.Types.ObjectId, ref: "Patient"},
    items: [
        {
            description : String,
            amount:Number
        }
    ],
    totalAmount:Number,
    paid:Boolean,
    date: { type:Date, default: Date.now }
})