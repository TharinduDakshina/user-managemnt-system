import React, {useEffect, useState} from 'react'
import {usePathname} from "next/navigation";

const Navbar = ({page}) => {
  const  [section, setSection] = useState("")
  const pathName = usePathname();

  useEffect(()=>{
    switch (page) {
      case 1: setSection("Home"); break;
      case 2: setSection("Users"); break;
      case 3: setSection("Contact"); break;
      case 4: setSection("About"); break;
      default: setSection("Bad request 🛑"); break;
    }
  },[page])

  useEffect(()=>{
    switch (pathName) {
      case "/": setSection("User"); break;
      case "/userAdd": setSection("Create New Account"); break;
      case "/contact": setSection("Contact"); break;
      case "/about": setSection("About"); break;
      default: setSection("Bad request 🛑"); break;
    }
  },[pathName])

  return (
    <div className='w-full md:w-auto bg-amber-200 h-[80px] flex items-center px-4'>
      {section}
    </div>
  )
}

export default Navbar