const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema(
  {
    lastName: { type: String, required: false },
    firstName: { type: String, required: false },
    gender: {
      type: String,
      required: false,
      enum: ["Male", "Female", "Other"],
    },
    address: { type: Object, required: false },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: false },
    avatar: { type: Schema.Types.ObjectId, ref: "File", required: false },
    verified: { type: Boolean, required: false, default: false },
    status: { type: Number, required: false, default: 3 },
  },
  {
    timestamps: true,
  }
);

schema.set("toJSON", {
  virtuals: true,
  versionKey: false, //to not update the verison
  transform: (doc, ret) => {
    delete ret._id;
  },
});

module.exports = mongoose.model("User", schema);
