import AboutMeNavBar from "@/components/NavBars/AboutMeNavbar.jsx";
import SocialIcons from "@/components/common/SocialIcons";

export default function AboutMeSection() {
    return(
        <div className="z-30 ">
            <AboutMeNavBar/>
            <div className=" text-white z-30 h-screen w-screen">
                <SocialIcons/>
                <div className="h-full flex flex-col justify-center">
                    <div className="flex flex-row justify-center">
                        <div className="pl-12">
                            <div className="flex flex-row pb-5">
                                <img className="w-24 h-24 rounded-full" src="/me.jpeg"></img>
                                <h1 className="text-3xl sm:text-5xl font-bold pl-4 pt-4 "> Michal Michalik </h1>
                            </div>
                            <h2 className="text-xl sm:text-3xl sm:w-[40rem] sm:leading-relaxed pb-5"> I am an ex athlete. I was a long time member of the Polish Alpine Skiing National Team. I started coding around 2020 and I quit professional sport in the beggining of 2022 to start working as software engeneer.</h2>
                            <a href="cliftonstrengthsMichalMichalik.pdf" download="Michal Michalik" className="text-l sm:text-xl bg-gray-500 p-4 rounded-md hover:font-semibold"> See My Clifton Strengths Test ✏️ </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}