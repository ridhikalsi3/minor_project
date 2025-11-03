import React, { useEffect, useState } from "react";
import API from "../utils/api";

function PatientDashboard() {
  const [vitals, setVitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get user data from localStorage
        const userData = localStorage.getItem("user");
        if (!userData) {
          setError("Please log in to view your vitals");
          setLoading(false);
          return;
        }

        // Parse user data
        const user = JSON.parse(userData);
        console.log("User data:", user);

        const userId = user._id || user.id;
if (!userId) {
  setError("User ID not found in profile data");
  setLoading(false);
  return;
}

const response = await API.get(`/vitals/${userId}`);

        setVitals(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error:", err);
        setError(err.response?.data?.message || "Error loading vitals data");
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Only run once on component mount

  if (loading) return <p>Loading your vitals...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!vitals.length) return <p>No vitals found for your account.</p>;

  return (
    <div className="patient-dashboard">
      <h2>Your Vitals</h2>
      {vitals.map((v, index) => (
        <div key={index} className="vital-card">
          <p><b>Heart Rate:</b> {v.heartRate} bpm</p>
          <p><b>Blood Pressure:</b> {v.bloodPressure}</p>
          <p><b>Temperature:</b> {v.temperature} °F</p>
          <p><b>Oxygen Level:</b> {v.oxygenLevel}%</p>
          <p><b>Date:</b> {new Date(v.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

export default PatientDashboard;
