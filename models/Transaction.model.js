const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    transactionType: {
      type: String,
      enum: ["expense", "income", "transfer"],
      default: "expense",
      required: [true, "Please specify transaction type"],
    },
    date: {
      type: Date,
      required: [true, "Please select a date"],
    },
    time: {
      type: String,
      required: [true, "Please enter time"],
    },
    amount: {
      type: Number,
      required: [true, "Please enter amount"],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [false, "Please enter category"],
    },
    paymode: {
      type: String,
      required: [true, "Please select payment mode"],
      enum: ["Upi", "Cash", "Creditcard", "Debitcard"],
    },
    otherDetails: {
      description: {
        type: String,
        required: [false, "Please enter description"],
      },
      invoice: {
        public_id: {
          type: String,
          default: null,
        },
        url: {
          type: String,
          default: null,
        },
      },
    },
    from: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Transaction", transactionSchema);
