import { FaAppStoreIos, FaGithub } from "react-icons/fa"
import skiDayText from "./skidayText"
import TechLabel from "../common/TechLabel"
import IphoneImage from "../common/IphoneImage"

export default function SkiDay() {
    return (
        <div name="my-projects" className="bg-black h-5/6 flex flex-col pt-28">
           <div className="flex flex-col-reverse sm:flex-row justify-center">
            <div className="flex justify-center">
              <IphoneImage image={"/skiday1.png"}/>
              <IphoneImage image={"/skiday2.png"}/>
              <IphoneImage image={"/skiday3.png"}/>
            </div> 
            <div className="pl-12 px-8">
            <div className="pr-12 flex row">
              <h1 className="text-4xl pr-3"> Ski Day</h1>
              <a href="https://apps.apple.com/pl/app/ski-day/id6443993407" target={"_blank"} className="pt-1.5 text-blue-400"><FaAppStoreIos className="w-8 h-8"/></a>
              <a href="https://github.com/michalik-michal/SkiDays" target="_blank" className="pt-1 pl-4"> <FaGithub className="w-8 h-8"></FaGithub></a>
            </div>
            <h3 className="text-xl w-[20rem] pb-3 leading-8 pt-5"> {skiDayText} </h3>
            <div className="grid grid-cols-4 gap-3 pt-5 pb-5 sm:pb-0">
                <TechLabel text="SwiftUI"/>
                <TechLabel text="Firebase"/>
                <TechLabel text="SwiftLint"/>
                <TechLabel text="Lottie"/>
              </div>
            </div>
           </div>
          </div>
    )
}