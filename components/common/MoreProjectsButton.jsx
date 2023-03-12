import {FaGithub} from "react-icons/fa"

export default function MoreProjectsButton() {
    return(
        <div className="h-64 bg-black flex flex-row justify-center sm:pt-0 pt-24">
            <div className="border-white border-2 p-4 rounded-[15px] h-20 flex flex-row items-center">
            <a href="https://github.com/michalik-michal" target={'_blank'} className="text-xl pr-3 font-bold"> See more projects on my GitHub</a>
            <FaGithub className="h-7 w-7"/>
            </div>
          </div>
    )
}