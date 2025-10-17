import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useEffect } from "react";
import {  useNavigate, useNavigationType } from "react-router-dom"; // ✅ import this
const Home = () => {
  const navType = useNavigationType(); 
  gsap.registerPlugin(SplitText)
 const navigate = useNavigate();

  useEffect(() => {

    const st = SplitText.create('.herotext' ,{type:'lines'})
    
    if (navType === "POP") {
      gsap.to(".titletext", { opacity: 0, duration: 0.5, delay: 1 });
      gsap.fromTo(".topdiv", { y:-70 , duration: 2, delay: 2 },{y:-450,duration:2 , delay:2});
      gsap.fromTo(".bottomdiv", { y:'-5%', duration: 1, delay: 2 },{y:450,duration:2,delay:2});
      gsap.fromTo('.heroTitle',{
        opacity:0,
        duration:1,
        delay: 3.5,
      },{
        opacity:1,
        duration:2,
        delay:3.5
      })
      gsap.fromTo(st.lines,{y:30,duration:1,delay:3.9,stagger:0.1,opacity:0},{y:0,duration:1,delay:3.9,stagger:0.1,opacity:1})
      gsap.fromTo('.hero-btns',{duration:1,delay:4.5,opacity:0},{duration:1,delay:4.5,opacity:1})
    }
  }, [navType]);

  return (
    <div className="h-[100vh] homepagediv relative overflow-hidden flex justify-center ">
      <div className="absolute  w-full top-[-70px] h-[70vh] left-0 bg-sky-600 z-50 text-9xl font-extrabold text-white text-center textjarurat topdiv">
        <h2 className="titletext">jarurat</h2>
      </div>
      <div className="absolute  w-full top-[50%] h-[70vh] left-0 bg-sky-600 z-40 text-9xl font-extrabold text-white text-center bottomdiv">
        <h2 className="titletext">care</h2>
      </div>
      <div className="overlay absolute h-[100vh] w-full bg-black/45 z-9"></div>
      <div className="z-30 herotextdiv text-center">
        <h1 className="text-8xl font-extrabold mb-4 drop-shadow-lg text-white heroTitle">Jarurat Care</h1>
         <p className="text-lg mb-8 text-blue-100 drop-shadow-md herotext " >
          Simplify patient management. Focus on care, not paperwork <br />Your health is our responsibility.
        </p>
        <div className="herobtndiv">
          <button className="hero-btns tra bg-sky-600 text-white rounded-lg hover:bg-sky-500" onClick={()=>navigate('/patients')}>Patients List</button>
          <button className="hero-btns tra  bg-white text-sky-600 rounded-md" onClick={()=>navigate('/patients/addPatient')}>Add Patient</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
