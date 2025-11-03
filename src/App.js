import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientDashboard from "./pages/PatientDashboard";
import HealthWatchLanding from "./pages/Landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HealthWatchLanding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/patient-dashboard/:id" element={<PatientDashboard />} />

      </Routes>
    </Router>
  );
}

export default App;
