import mongoose from "mongoose";

const counterSchema = new mongoose.Schema({
  _id: { type: String, required: true }, // The name of the counter (e.g., "bookId")
  seq: { type: Number, default: 0 }, // The last used ID value
});

const Counter = mongoose.model("Counter", counterSchema);

export default Counter;
