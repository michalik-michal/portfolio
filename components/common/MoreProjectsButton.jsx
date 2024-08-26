import {FaGithub} from "react-icons/fa"

export default function MoreProjectsButton() {
    return(
        <div className="h-[15rem] bg-black flex flex-col justify-center sm:pt-0  items-center space-y-5">
            <a href="https://www.producthunt.com/posts/quit-snus-addiction?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-quit&#0045;snus&#0045;addiction" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=483151&theme=light" alt="Quit&#0032;Snus&#0032;Addiction - Quit&#0032;nicotine&#0032;pouches&#0032;by&#0032;tracking&#0032;usage&#0044;&#0032;costs&#0032;and&#0032;more | Product Hunt"  width="300" height="54" /></a>
            <div className="border-white border-2 p-4 rounded-[15px] h-13 flex flex-row items-center">
            <a href="https://github.com/michalik-michal" target={'_blank'} className="text-xl pr-3 font-bold hover:text-gray-400"> See more projects on my GitHub</a>
            <FaGithub className="h-7 w-7"/>
            </div>
          </div>
    )
}