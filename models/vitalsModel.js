import mongoose from "mongoose";

const vitalsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  heartRate: {
    type: Number,
    default: 72,
  },
  bloodPressure: {
    type: String,
    default: "120/80",
  },
  temperature: {
    type: Number,
    default: 98.6,
  },
  oxygenLevel: {
    type: Number,
    default: 98,
  },
});

const Vitals = mongoose.model("Vitals", vitalsSchema);
export default Vitals;
