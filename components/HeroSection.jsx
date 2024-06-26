import { Link } from "react-scroll";
import {timePassedSince } from "components/utils/timePassedSince.jsx";
import { ageCalculator } from "components/utils/ageCalculator.jsx";
import { WavyBackground } from "./common/wavyBackground";
import { TextGenerateEffect } from "./common/TextGenerate";
 
export default function HeroSection() {
    return(
        <WavyBackground className="">
          <div name="home" className="h-screen flex flex-col justify-center">
            <div className="flex flex-row justify-center">
              <img className="sm:w-96 sm:h-96 w-24 h-24 rounded-full" src="/me.jpeg"></img>
              <div className="pl-12">
                 <TextGenerateEffect words="Hi there 👋" className="text-5xl font-bold pb-3 pt-2" />
                 <h2 className="text-2xl sm:w-96 w-56"> I am {ageCalculator("2000-12-29")} years old iOS developer with {timePassedSince("June 1, 2022")} of work experience. </h2>
                 <h2> </h2>
                 <div className="flex items-start flex-col pt-3 space-y-3">
                    <button className="text-xl bg-slate-400 p-2 rounded-md hover:font-semibold"><Link to="experience" smooth={true} duration={400} offset={-150}>See my experience 💯</Link> </button>
                    <button className="text-xl bg-slate-400 p-2 rounded-md hover:font-semibold"> <Link to="my-projects" smooth={true} duration={400} offset={-150}>See my projects 🤓</Link> </button>
                 </div>
              </div>
            </div>
          </div>
        </WavyBackground>
    )
}

