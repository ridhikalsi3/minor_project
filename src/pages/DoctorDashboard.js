import React, { useState, useEffect } from "react";
import API from "../utils/api";

function DoctorDashboard() {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [vitals, setVitals] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await API.get("/vitals/all/patients");
        setPatients(res.data);
      } catch (err) {
        console.error("Error fetching patients:", err);
      }
    };
    fetchPatients();
  }, []);

  const fetchVitals = async (id) => {
    try {
      const res = await API.get(`/vitals/${id}`);
      console.log("Vitals fetched:", res.data);
      setVitals(res.data);
      setSelectedPatient(id);
    } catch (err) {
      console.error("Error fetching vitals:", err);
      alert("No vitals found for this patient.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>👨‍⚕️ Doctor Dashboard</h2>
      <h3>List of Patients:</h3>

      <ul>
        {patients.map((p) => (
          <li key={p._id}>
            {p.name} ({p.email}){" "}
            <button onClick={() => fetchVitals(p._id)}>View Vitals</button>
          </li>
        ))}
      </ul>

      {vitals.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Vitals for Patient ID: {selectedPatient}</h3>
          <table border="1" cellPadding="8">
            <thead>
              <tr>
                <th>Temperature</th>
                <th>Heart Rate</th>
                <th>Blood Pressure</th>
                <th>Oxygen Level</th>
              </tr>
            </thead>
            <tbody>
              {vitals.map((v, i) => (
                <tr key={i}>
                  <td>{v.temperature}</td>
                  <td>{v.heartRate}</td>
                  <td>{v.bloodPressure}</td>
                  <td>{v.oxygenLevel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default DoctorDashboard;
