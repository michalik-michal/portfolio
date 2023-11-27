import { Link as ScrollLink } from "react-scroll";
import Link from 'next/link'

export default function NavBar() {
    return (
          <div className=" bg-zinc-900 text-white h-16 flex flex-row-reverse sm:px-16 sm:text-xl fixed w-screen"> 
          <button className='px-5 hover:font-bold'> <Link href="/aboutme"> About me</Link></button>
           <button className='px-5 hover:font-bold'> <ScrollLink to="my-projects" smooth={true} duration={400} offset={-150}> My Projects</ScrollLink></button>
            <button className='px-5 hover:font-bold'> <ScrollLink to="experience" smooth={true} duration={400} offset={-150}> Experience</ScrollLink></button>
            <button className='px-5 hover:font-bold'> <ScrollLink to="home" smooth={true} duration={500}> Home</ScrollLink></button>
          </div>
      )
  }
