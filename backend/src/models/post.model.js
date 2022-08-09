const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema(
  {
    title: { type: String, required: false },
    description: { type: String, required: true },
    comments: [
      { type: Schema.Types.ObjectId, ref: "Comment", required: false },
    ],
    user: { type: Schema.Types.ObjectId, ref: "User", required: false },

    image: { type: Schema.Types.ObjectId, ref: "File", required: false },
    verified: { type: Boolean, required: false, default: false },
    status: { type: Number, required: false, default: 1 },
  },
  {
    timestamps: false,
  }
);

schema.set("toJSON", {
  virtuals: true,
  versionKey: false, //to not update the verison
  transform: (doc, ret) => {
    delete ret._id;
  },
});

module.exports = mongoose.model("Post", schema);
