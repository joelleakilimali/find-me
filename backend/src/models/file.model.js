import mongoose from "mongoose";
const { Schema } = mongoose;

const schema = new Schema(
  {
    filename: { type: String, required: true },
    extension: { type: String, required: false },
    filesize: { type: String, required: false },
    path: { type: String, required: true },
    status: { type: Number, required: true, default: 1 },
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

export default mongoose.model("Comment", schema);
