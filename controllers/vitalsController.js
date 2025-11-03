import Vitals from "../models/vitalsModel.js";
import User from "../models/userModel.js";

// ✅ Get vitals of a particular patient (for patient dashboard)
export const getVitals = async (req, res) => {
  try {
    const { userId } = req.params;
    console.log('Attempting to fetch vitals for userId:', userId);
    
    // First find all vitals to debug
    const allVitals = await Vitals.find({});
    console.log('All vitals in database:', allVitals);
    
    // Then find specific user's vitals
    const vitals = await Vitals.find({ 
  $or: [{ userId }, { patientId: userId }] 
});
    console.log('Found vitals for this user:', vitals);
    
    if (!vitals.length) {
      return res.status(404).json({ 
        message: "No vitals found",
        debug: {
          requestedUserId: userId,
          availableUserIds: [...new Set(allVitals.map(v => v.userId))]
        }
      });
    }
    res.json(vitals);
  } catch (error) {
    console.error('Error in getVitals:', error);
    res.status(500).json({ message: "Error fetching vitals", error });
  }
};

// ✅ Get list of all patients (for doctor dashboard)
export const getAllPatients = async (req, res) => {
  try {
    const patients = await User.find({ role: "patient" }).select("name email _id");
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: "Error fetching patients", error });
  }
};
