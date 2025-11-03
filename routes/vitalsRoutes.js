import express from "express";
import { getVitals, getAllPatients } from "../controllers/vitalsController.js";
import Vitals from "../models/vitalsModel.js";

const router = express.Router();

// ✅ Route to add mock vitals
router.post("/mock", async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      return res.status(400).json({ message: "userId is required" });
    }

    const mockData = [
      {
        userId,
        temperature: 98.6,
        bloodPressure: "120/80",
        heartRate: 72,
        oxygenLevel: 98,
      },
      {
        userId,
        temperature: 99.2,
        bloodPressure: "118/78",
        heartRate: 76,
        oxygenLevel: 97,
      },
    ];

    await Vitals.insertMany(mockData);
    res.status(201).json({ message: "Mock vitals added successfully" });
  } catch (error) {
    console.error("Error adding vitals:", error);
    res.status(500).json({ message: "Error adding mock vitals", error: error.message });
  }
});

// ✅ Fetch all patients (for doctor dashboard)
router.get("/all/patients", getAllPatients);

// ✅ Fetch vitals for a specific patient (for patient dashboard)
router.get("/:userId", getVitals);

export default router;
