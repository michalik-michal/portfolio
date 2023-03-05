import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function SocialIcons() {
    return(
         <div className="flex fixed flex-col top-[35%] left-10">
            <a href="https://www.linkedin.com/in/micha%C5%82-michalik-59b743229/" target="_blank" className="py-5"> <FaLinkedin className="w-10 h-10 hover:text-sky-400"></FaLinkedin></a>
            <a href="https://github.com/michalik-michal" target="_blank"> <FaGithub className="w-10 h-10 hover:text-gray-400"></FaGithub></a>
          </div>
          
    )
}