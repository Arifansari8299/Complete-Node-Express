const agentSchema = new mongoose.Schema({
    name: String,
    contact: String,
    email: String,
    parentAgentId: { type: mongoose.Schema.Types.ObjectId, ref: "Agent" }, // for hierarchy
    totalSalesAmount: { type: Number, default: 0 }, // for calculating thresholds
    joinedOn: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model("Agent", agentSchema);
  