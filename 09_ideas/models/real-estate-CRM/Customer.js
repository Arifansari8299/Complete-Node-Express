const customerSchema = new mongoose.Schema({
    name: String,
    contact: String,
    email: String,
    address: String,
    addedByAgent: { type: mongoose.Schema.Types.ObjectId, ref: "Agent" },
    addedOn: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model("Customer", customerSchema);
  