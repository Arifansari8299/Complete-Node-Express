const saleSchema = new mongoose.Schema({
    landId: { type: mongoose.Schema.Types.ObjectId, ref: "Plot" },
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
    agentId: { type: mongoose.Schema.Types.ObjectId, ref: "Agent" }, // who sold
    saleAmount: Number,
    saleDate: { type: Date, default: Date.now },
    commissionDistributed: { type: Boolean, default: false }
  });
  
  module.exports = mongoose.model("Sale", saleSchema);
  