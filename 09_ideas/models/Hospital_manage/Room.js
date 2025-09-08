const roomSchema = new mongoose.Schema({
    roomNumber: String,
    bedCount: Number,
    type: String,
    occupied: Boolean
});