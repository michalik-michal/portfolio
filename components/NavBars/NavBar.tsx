import { Link } from "react-scroll";

export default function NavBar() {
    return (
          <div className=" bg-zinc-900 text-white h-16 flex flex-row-reverse px-16 text-xl fixed w-screen"> 
          <button className='px-5 hover:font-bold'> <a href="/aboutme"> About me</a></button>
           <button className='px-5 hover:font-bold'> <Link to="my-projects" smooth={true} duration={400} offset={-150}> My Projects</Link></button>
            <button className='px-5 hover:font-bold'> <Link to="experience" smooth={true} duration={400} offset={-150}> Experience</Link></button>
            <button className='px-5 hover:font-bold'> <Link to="home" smooth={true} duration={500}> Home</Link></button>
          </div>
      )
  }