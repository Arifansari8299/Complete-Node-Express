const medicineSchema = new mongoose.Schema({
    name:String,
    quantity:Number,
    expiryDate:Date,
    price:Number
});