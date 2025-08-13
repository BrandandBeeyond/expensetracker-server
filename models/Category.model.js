const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    public_id: {
      type: String,
      required: [true, "Please upload a icon image"],
    },
    url: {
      type: String,
      required: [true, "Please upload a icon image"],
    },
  },

  transactionType: {
    type: String,
    enum: ["Expense", "Income", "Transfer"],
    required: true,
  },

  categoryType: {
    type: String,
    required: true,
  },
  parentCategory: {
    type:String,
    default: null,
  }
});

module.exports = mongoose.model("Category", categorySchema);
