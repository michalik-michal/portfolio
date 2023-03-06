import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function SocialIcons() {
    return(
         <div className="flex fixed flex-col top-[43%] left-10">
            <a href="https://www.linkedin.com/in/micha%C5%82-michalik-59b743229/" target="_blank" className="py-5"> <FaLinkedin className="w-10 h-10 hover:w-14"></FaLinkedin></a>
            <a href="https://github.com/michalik-michal" target="_blank"> <FaGithub className="w-10 h-10 hover:w-14"></FaGithub></a>
          </div>
          
    )
}