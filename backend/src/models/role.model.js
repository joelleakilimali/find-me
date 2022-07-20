import mongoose from "mongoose";
const { Schema } = mongoose;

const schema = new Schema(
  {
    name: { type: String, required: true },
    status: { type: Number, required: true, default: 3 },
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

export default mongoose.model("Role", schema);
