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
  categoryType: {
    type: String,
    enum: ["Basic", "Enjoyment", "Healthcare", "Others"],
  },
});

module.exports = mongoose.model("Category", categorySchema);
