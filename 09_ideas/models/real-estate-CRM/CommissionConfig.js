const commissionConfigSchema = new mongoose.Schema({
    level: Number, // 1: direct, 2: upline, etc.
    defaultPercentage: Number, // e.g., 12 for top level
    conditionalPercentage: Number, // e.g., 8 for under agent
    condition: {
      minSales: Number, // e.g., ₹20 lakh
      periodInDays: Number, // optional: e.g., 60 days
    }
  });
  
  module.exports = mongoose.model("CommissionConfig", commissionConfigSchema);
  