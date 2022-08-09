const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema(
  {
    key: { type: String, required: true },
    path: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("File", schema);
