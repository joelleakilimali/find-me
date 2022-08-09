const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema(
  {
    post: { type: Schema.Types.ObjectId, ref: "Post", required: false },
    user: { type: Schema.Types.ObjectId, ref: "User", required: false },
    content: { type: String, required: false },
    status: { type: Number, required: false, default: 1 },
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

module.exports = mongoose.model("Comment", schema);
