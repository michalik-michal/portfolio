import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TbMail } from "react-icons/tb"
import { toast, Toaster } from "react-hot-toast";

function handleMailClik() {
  navigator.clipboard.writeText('michalpiotr.michalik@gmail.com');
  toast.success("Mail coppied");
}

export default function SocialIcons() {
    return(
         <div className="flex fixed flex-col top-[43%] left-10 sm:visible invisible z-50">
          <div> <Toaster/></div>
            <a href="https://www.linkedin.com/in/micha%C5%82-michalik-59b743229/" target="_blank" className="py-5"> <FaLinkedin className="w-10 h-10 hover:w-14 duration-[200ms]"></FaLinkedin></a>
            <a href="https://github.com/michalik-michal" target="_blank" className="pb-5"> <FaGithub className="w-10 h-10 hover:w-14 duration-[200ms] "></FaGithub></a>
            <button onClick={handleMailClik}> <TbMail className="w-10 h-10 hover:w-14 duration-[200ms]"></TbMail></button>
          </div>
          
    )
}