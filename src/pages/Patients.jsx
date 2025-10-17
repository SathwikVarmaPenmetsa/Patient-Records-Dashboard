
import React, {  useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

const Patients = ({data,setData,loading}) => {
  
  const [searchinp , setSearchinp] = useState("");

  const filteredPatients = data.filter((patient) => patient.name.toLowerCase().includes(searchinp.toLowerCase()));
  
  const navigate = useNavigate()
  console.log(data);

  function handalDelect(id,e){
      if (e && e.stopPropagation) e.stopPropagation();
      if (!confirm("Delete this patient? This action cannot be undone.")) return;
      if (typeof setData === "function") {
        setData((prev) => prev.filter((p) => p.id !== id));
        alert('patient record is deleted ')
        return;
      }
  }

  if (loading) return <div>
    <div className="h-[50vh] flex justify-center items-center w-[90vw]">
            <RotatingLines
                visible={true}
                height="96"
                width="96"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
                />
    </div>
  </div>;
  
  return (
    <div className="min-h-screen">
      <div className=" sticky top-17 z-20 flex justify-center items-center text-center w-full searchdiv">
        <div className="inputdiv flex justify-center items-center p-10 pb-20  bg-inherit top-22  ">
          <input
            type="search"
            name="search"
            id="searchinp"
            placeholder="search..."
            className="rounded-s-2xl w-[200px] sm:w-[400px] lg:w-[420px] bg-white "
            onChange={(e)=>setSearchinp(e.target.value)}
          />
          <span className=" text-2xl bg-sky-400 text-white rounded-e-xl h-[50px] flex justify-center items-center w-[50px] ">
            <IoSearch />
          </span>
           <button className="hero-btns bg-sky-600 text-white tra rounded-md w-[90px] sm:w-[150px] hover:bg-sky-500 " onClick={()=>navigate('/patients/addPatient')}>Add Patient</button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-6 cardsgrid content-center justify-center">
        {filteredPatients && filteredPatients.length > 0 ? (
          filteredPatients.map((pd) => {
            return (
              <div
                className="Patientcard bg-white rounded-xl border tra border-gray-100 cardanimation "
                key={pd.id}
              >
                <h2 className="text-2xl font-bold text-sky-600 mb-3">
                  <span className="text-gray-700 font-semibold">Name:</span>{" "}
                  {pd.name}
                </h2>
                <p className="text-gray-600 mb-1">
                  <span className="font-semibold text-gray-800">Token No:</span>{" "}
                  {pd.token}
                </p>
                <div className="flex justify-center gap-7 text-gray-600 mb-1">
                  <div>
                    <span className="font-semibold text-gray-800">Age:</span>{" "}
                    {pd.age}
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Gender:</span>{" "}
                    {pd.gender}
                  </div>
                </div>
               
                  <p className="text-gray-600 mb-1">
                    <span className="font-semibold text-gray-800">
                      Condition:
                    </span>{" "}
                    {pd.condition}
                  </p>
                  <div>
                    <span className="font-semibold text-gray-800">contact:</span>{" "}
                    {pd.contact}
                
                </div>
                 <p className="text-gray-600 mb-4 text-sm ">
                  <span className="font-semibold text-gray-800 text-lg">
                    email:
                  </span>{""}
                  {pd.email}
                </p>
                <div className="flex justify-around items-center p-5 ">
                  <button className=" moreinfo-btns bg-sky-600 text-white rounded-3xl tra font-semibold w-full hover:bg-sky-500 hover:shadow-2xl " onClick={()=>navigate(`/patients/:${pd.id}`,{state:pd})}>
                  View Details
                </button>
                <button onClick={()=>handalDelect(pd.id)} className="text-2xl cursor-pointer"><MdDelete /></button>
                </div>
              </div>
            );
          })
        ) : (
          <div>No patients found....</div>
        )}
      </div>
    </div>
  );
};

export default Patients;
