import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const AddPatient = ({setData}) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
    email: "",
    bloodGroup: "",
    lastVisit: "",
    condition: "",
    allergies: "",
    weight: "",
    height: "",
    address: { city: "", street: "" },
    emergencyContact: { name: "", phone: "" },
    notes: "",
  });
  
  const Navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNestedChange = (e, parentKey) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [parentKey]: { ...formData[parentKey], [name]: value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newId = Date.now();
    const today = new Date();
    const token = `${today.getDate()}${today.getMonth() + 1}${today.getFullYear()}-${Math.floor(
      Math.random() * 100
    )}`;

    const newPatient = { id: newId, token, ...formData };
    setData((prev)=>[...prev,newPatient])
    alert("New patient added successfully ✅");

    setFormData({
      name: "",
      age: "",
      gender: "",
      contact: "",
      email: "",
      bloodGroup: "",
      lastVisit: "",
      condition: "",
      allergies: "",
      weight: "",
      height: "",
      address: { city: "", street: "" },
      emergencyContact: { name: "", phone: "" },
      notes: "",
    });
  };

  return (
    
   <div className="flex h-full justify-center items-center  ">
     <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto bg-white p-15 rounded-xl shadow-md space-y-6 w-full inputboxs relative h-full"
    >
      <h2 className="text-2xl font-bold text-center text-sky-600">Add New Patient</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="border p-2 rounded" required />
        <input name="age" value={formData.age} onChange={handleChange} placeholder="Age" className="border p-2 rounded" required />
        <input name="gender" value={formData.gender} onChange={handleChange} placeholder="Gender" className="border p-2 rounded" required />
        <input name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} placeholder="Blood Group" className="border p-2 rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <input name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact" className="border p-2 rounded" required />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="border p-2 rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <input name="condition" value={formData.condition} onChange={handleChange} placeholder="Condition" className="border p-2 rounded" />
        <input name="allergies" value={formData.allergies} onChange={handleChange} placeholder="Allergies" className="border p-2 rounded" />
        <input name="weight" value={formData.weight} onChange={handleChange} placeholder="Weight (kg)" className="border p-2 rounded" />
        <input name="height" value={formData.height} onChange={handleChange} placeholder="Height (cm)" className="border p-2 rounded" />
      </div>

      <div className="flex justify-start items-center gap-2">
        <label className="block text-sm font-medium">Last Visit :</label>
        <input type="date" name="lastVisit" value={formData.lastVisit} onChange={handleChange} className="border p-2 rounded  " />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <input
          name="street"
          value={formData.address.street}
          onChange={(e) => handleNestedChange(e, "address")}
          placeholder="Street"
          className="border p-2 rounded"
        />
        <input
          name="city"
          value={formData.address.city}
          onChange={(e) => handleNestedChange(e, "address")}
          placeholder="City"
          className="border p-2 rounded"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <input
          name="name"
          value={formData.emergencyContact.name}
          onChange={(e) => handleNestedChange(e, "emergencyContact")}
          placeholder="Emergency Contact Name"
          className="border p-2 rounded"
        />
        <input
          name="phone"
          value={formData.emergencyContact.phone}
          onChange={(e) => handleNestedChange(e, "emergencyContact")}
          placeholder="Emergency Contact Phone"
          className="border p-2 rounded"
        />
      </div>

      <textarea
        name="notes"
        value={formData.notes}
        onChange={handleChange}
        placeholder="Additional Notes"
        className="w-full border p-2 mt-5 rounded"
        rows="3"
      ></textarea>

      <button type="submit" className="bg-sky-600 text-white w-full p-7 rounded hover:bg-sky-500 cursor-pointer transition-all">
        Add Patient
      </button>
      <button className='p-5  text-3xl backbtn absolute top-2 left-1 cursor-pointer ' onClick={()=>Navigate(-1)}><IoMdArrowRoundBack /></button>
    </form>
   </div>
     
  );
};

export default AddPatient;

