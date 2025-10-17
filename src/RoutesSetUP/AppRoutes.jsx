import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Patients from "../pages/Patients";
import AddPatient from "../pages/AddPatient";
import About from "../pages/About";
import FullPatientInfo from "../pages/FullPatientInfo";
import { useEffect, useState } from "react";
import patientsData from '../../public/Data/patientsData.json'

const AppRoutes = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setData(patientsData); 
        setLoading(false); 
      }, 1000); 

      return () => clearTimeout(timer); 
    }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/patients" element={<Patients data={data} setData={setData} loading={loading} />} />
      <Route path="/patients/:token" element={<FullPatientInfo />} />
      <Route path="/about" element={<About />} />
      <Route path="/patients/addPatient" element={<AddPatient  setData={setData}/>} />
    </Routes>
  );
};

export default AppRoutes;
