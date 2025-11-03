import mongoose from "mongoose";

const vitalsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  heartRate: Number,
  bloodPressure: String,
  temperature: Number,
  oxygenLevel: Number,
  recordedAt: { type: Date, default: Date.now },
}, { timestamps: true }); // ✅ Add timestamps for createdAt/updatedAt

export default mongoose.model("Vitals", vitalsSchema);
