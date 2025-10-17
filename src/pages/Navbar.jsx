import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo2.png'
import gsap from 'gsap'
const Navbar = () => {

   useEffect(()=>{

      gsap.set('.nav-link',{
        opacity:0,
        y:100
      })
      gsap.to('.nav-link',{
        opacity:1,
        y:-100,
        duration:1,
        stagger:0.3,
        delay:3,
        ease:'back.inOut'
      })
      gsap.set('.logo',{
        opacity:0,
      })
      gsap.to('.logo',{
        opacity:1,
        duration:1,
        delay:3,
        ease:'back.inOut'
      })
    },[])

    const navg = useNavigate()

  return (

   <nav className="flex justify-center items-center lg:gap-50 gap-10 sticky h-[70px] top-0 shadow-md z-10 px-6 bg-sky-600 navbar overflow-hidden " >
    <div className="logo "><img src={logo} alt="" className='lg:h-[58px] md:h-[48px] sm:h-[40px] h-[35px]  rounded-2xl ' onClick={()=>navg('/')} /></div>
    <div className="Navlinks ml-12">
      <ul className="flex justify-center items-center lg:gap-14 gap-4 text-sm sm:text-md uppercase font-semibold text-white ">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link relative px-1 ${isActive ? 'active' : ''}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/patients"
            className={({ isActive }) =>
              `nav-link relative px-1 ${isActive ? 'active' : ''}`
            }
          >
            Patients
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-link relative px-1 ${isActive ? 'active' : ''}`
            }
          >
            About
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>

  )
}

export default Navbar
