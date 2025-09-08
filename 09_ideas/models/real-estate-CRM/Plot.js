const plotSchema = new mongoose.Schema({
    title: String, // "Plot #21, Sector 4"
    area: Number, // in sq ft
    location: String,
    price: Number,
    isSold: { type: Boolean, default: false },
    soldTo: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
    soldBy: { type: mongoose.Schema.Types.ObjectId, ref: "Agent" },
    soldOn: Date,
  });
  
  module.exports = mongoose.model("Plot", plotSchema);
  