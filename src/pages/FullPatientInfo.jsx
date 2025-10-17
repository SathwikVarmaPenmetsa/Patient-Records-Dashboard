import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";

const FullPatientInfo = () => {
    const fulldata = useLocation();
    const patient = fulldata.state;
    console.log(patient); 
    const navigate = useNavigate()
    
    
  return (
    
    <div className="h-full p-30 flex justify-center items-center">
        <div className='lg:w-4xl p-30 shadow-xl rounded-xl bg-white h-full  '>
            <div className='flex justify-between items-center flex-wrap '>
                <h2 className="text-3xl font-bold text-sky-600 mb-3">
                  <span className="text-gray-700 font-semibold">Name:</span>{" "}
                  {patient.name}
                </h2>
                <p className="text-gray-600 mb-1">
                  <span className="font-semibold text-gray-800">Token No:</span>{" "}
                  {patient.token}
                </p>
            </div>
            <div className='mt-10 flex flex-wrap lg:gap-10 gap-4  text-xl'> 
                 <p className="text-gray-600 mb-1">
                  <span className="font-semibold text-gray-800">Age:</span>{" "}
                  {patient.age}
                </p>
                 <p className="text-gray-600 mb-1">
                  <span className="font-semibold text-gray-800">Gender:</span>{" "}
                  {patient.gender}
                </p>
            </div>

              <div className='mt-10 flex flex-wrap lg:gap-10 gap-4 text-xl'> 
                 <p className="text-gray-600 mb-1">
                  <span className="font-semibold text-gray-800">Contact:</span>{" "}
                  {patient.contact}
                </p>
                 <p className="text-gray-600 mb-1">
                  <span className="font-semibold text-gray-800">Email:</span>{" "}
                  {patient.email}
                </p>
            </div>

            <div className='mt-10 flex flex-wrap lg:gap-10 gap-4 text-xl justify-start items-center'> 
                 <p className="text-gray-600">
                  <span className="font-semibold text-gray-800">BloodGroup:</span>{" "}
                  <span className='text-red-600'>{patient.bloodGroup}</span>
                </p>
                 <p className="text-gray-600 mb-1">
                  <span className="font-semibold text-gray-800">Last Visite:</span>{" "}
                  {patient.lastVisit}
                </p>
            </div>
            <p className="text-gray-600 mb-1 text-xl">
                <span className="font-semibold text-gray-800">address:</span>{" "}
                {patient.address.city } , { patient.address.street}
            </p>

            <hr className='mt-10' />
            <div className='mt-10'>
                <h2 className='text-xl font-semibold text-sky-600 underline'>Health Details</h2>
                <div className='mt-10 flex flex-wrap lg:gap-10 gap-4 text-xl'> 
                    <p className="text-gray-600 mb-1">
                    <span className="font-semibold text-gray-800">Condition:</span>{" "}
                    {patient.condition}
                    </p>
                    <p className="text-gray-600 mb-1">
                    <span className="font-semibold text-gray-800">allergies:</span>{" "}
                    {patient.allergies}
                    </p>
                </div>
                <div className='mt-10 flex flex-wrap lg:gap-10 gap-4 text-xl'> 
                    <p className="text-gray-600 mb-1">
                    <span className="font-semibold text-gray-800">weight:</span>{" "}
                    {patient.weight} kg
                    </p>
                    <p className="text-gray-600 mb-1">
                    <span className="font-semibold text-gray-800">height:</span>{" "}
                    {patient.height} cm
                    </p>
                </div>
            </div>
                <hr />
                <div className='mt-10 text-xl'> 
                    <h2 className='text-xl font-semibold text-sky-600 underline'>Other Details</h2>
                <div className='mt-10 flex flex-wrap lg:gap-10 gap-4 text-xl'> 
                    <p className="text-gray-600 mb-1">
                    <span className="font-semibold text-gray-800">UpComing appointments:</span>{" "}
                     {patient.appointments[0].doctor} - {patient.appointments[0].date} 
                    </p>
                </div>
                <div className='mt-10 flex flex-wrap lg:gap-10 gap-4 text-xl'> 
                    <p className="text-gray-600 mb-1">
                    <span className="font-semibold text-gray-800">Doctor's notes:</span>{" "}
                    {patient.notes}
                    </p>
                </div>
                <div className='mt-10 flex flex-wrap lg:gap-10 gap-4 text-xl'> 
                    <p className="text-gray-600 mb-1">
                    <span className="font-semibold text-gray-800">emergencyContact:</span>{" "}
                     {patient.emergencyContact.name} - {patient.emergencyContact.phone}
                    </p>
                </div>
                </div>

                <button className='p-5 border bg-sky-600 mt-10 rounded text-white text-3xl backbtn' onClick={()=>navigate(-1)}><IoMdArrowRoundBack /></button>
        </div>
    </div>
    
  )
}

export default FullPatientInfo
