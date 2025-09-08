const commissionSchema = new mongoose.Schema({
    agentId: { type: mongoose.Schema.Types.ObjectId, ref: "Agent" },
    saleId: { type: mongoose.Schema.Types.ObjectId, ref: "Sale" },
    commissionPercentage: Number,
    commissionAmount: Number,
    status: { type: String, enum: ["Pending", "Paid"], default: "Pending" }
  });
  
  module.exports = mongoose.model("Commission", commissionSchema);
  