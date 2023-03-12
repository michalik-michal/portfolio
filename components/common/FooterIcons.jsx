import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TbMail } from "react-icons/tb"
import { toast, Toaster } from "react-hot-toast";

function handleMailClik() {
  navigator.clipboard.writeText('michalpiotr.michalik@gmail.com');
  toast.success("Mail coppied");
}

export default function FooterIcons() {
    return(
         <div className="flex justify-center gap-5 pt-4 text-gray-300">
          <div> <Toaster/></div>
            <a href="https://www.linkedin.com/in/micha%C5%82-michalik-59b743229/" target="_blank" > <FaLinkedin className="w-7 h-7 "></FaLinkedin></a>
            <a href="https://github.com/michalik-michal" target="_blank"> <FaGithub className="w-7 h-7 "></FaGithub></a>
            <button onClick={handleMailClik}> <TbMail className="w-7 h-7"></TbMail></button>
          </div>
          
    )
}