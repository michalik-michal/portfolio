import { FaAppStoreIos } from "react-icons/fa"
import skiDayText from "./skidayText"
import TechLabel from "../common/TechLabel"
import IphoneImage from "../common/IphoneImage"

export default function SkiDay() {
    return (
        <div name="my-projects" className="bg-black h-full flex flex-col pt-28">
           <div className="flex flex-row justify-center"> 
            <IphoneImage image={"/skiday1.png"}/>
            <IphoneImage image={"/skiday2.png"}/>
            <IphoneImage image={"/skiday3.png"}/>
            
            <div className="pl-12">
            <div className="pr-12 flex row">
              <h1 className="text-4xl pr-3"> Ski Day</h1>
              <a href="https://apps.apple.com/pl/app/ski-day/id6443993407" target={"_blank"} className="text-4xl pt-1 text-blue-400"><FaAppStoreIos/></a>
            </div>
            <h3 className="text-xl w-[20rem] pb-3 leading-8 pt-5"> {skiDayText} </h3>
            <div className="grid grid-cols-4 gap-3 pt-5">
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