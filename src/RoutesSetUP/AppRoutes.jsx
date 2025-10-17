import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Patients from "../pages/Patients";
import AddPatient from "../pages/AddPatient";
import About from "../pages/About";
import FullPatientInfo from "../pages/FullPatientInfo";
import { useEffect, useState } from "react";
import patientsData from "../Data/patientsData";

const AppRoutes = () => {
  const [data, setData] = useState([]);
    useEffect(() => {
      setTimeout(() => {
        setData([...patientsData]);
      }, 500);
    }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/patients" element={<Patients data={data} setData={setData} />} />
      <Route path="/patients/:token" element={<FullPatientInfo />} />
      <Route path="/about" element={<About />} />
      <Route path="/patients/addPatient" element={<AddPatient  setData={setData}/>} />
    </Routes>
  );
};

export default AppRoutes;
