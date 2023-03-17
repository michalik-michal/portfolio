import {FaGithub} from "react-icons/fa"

export default function MoreProjectsButton() {
    return(
        <div className="h-[40rem] sm:h-[25rem] bg-black flex flex-row justify-center sm:pt-0 pt-[20rem] items-center">
            <div className="border-white border-2 p-4 rounded-[15px] h-20 flex flex-row items-center">
            <a href="https://github.com/michalik-michal" target={'_blank'} className="text-xl pr-3 font-bold hover:text-gray-400"> See more projects on my GitHub</a>
            <FaGithub className="h-7 w-7"/>
            </div>
          </div>
    )
}