import { Link } from "react-scroll";
import {timePassedSince } from "components/utils/timePassedSince.jsx";
import { ageCalculator } from "components/utils/ageCalculator.jsx";
 
export default function HeroSection() {
    return(
        <div name="home" className="h-full flex flex-col justify-center">
            <div className="flex flex-row justify-center">
              <img className="w-96 h-96 rounded-full" src="/me.jpeg"></img>
              <div className="pl-12">
                 <h1 className="text-5xl font-bold pb-3 pt-2"> Hi there 👋</h1>
                 <h2 className="text-2xl w-96"> I'am {ageCalculator("2000-12-29")} years old iOS developer with {timePassedSince("June 1, 2022")} of work experience. </h2>
                 <h2> </h2>
                 <div className="flex items-start flex-col pt-3 space-y-3">
                    <button className="text-xl bg-gray-500 p-2 rounded-md hover:font-semibold"><Link to="experience" smooth={true} duration={400} offset={-150}>See my experience 💯</Link> </button>
                    <button className="text-xl bg-gray-500 p-2 rounded-md hover:font-semibold"> <Link to="my-projects" smooth={true} duration={400} offset={-150}>See my projects 🤓</Link> </button>
                 </div>
              </div>
            </div>
          </div>
    )
}

