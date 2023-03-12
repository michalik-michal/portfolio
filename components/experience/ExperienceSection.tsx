import footballcoText from "./footballcoText"
import TechLabel from "../common/TechLabel"
import IphoneImage from "../common/IphoneImage"
import { FaAppStoreIos } from "react-icons/fa"

export default function ExperienceSection() {
    return(
        <div name="experience" className="bg-black h-full flex flex-col pt-28">
           <div className="flex flex-col sm:flex-row justify-center"> 
            <div className="pr-12 px-8">
            <div className="pr-12  flex flex-row">
              <h1 className="text-4xl pr-3"> GOAL</h1>
              <a href="https://apps.apple.com/us/app/goal/id518026818" target={"_blank"} className="pt-1.5 text-blue-400"><FaAppStoreIos className="w-8 h-8"/></a>
            </div>
              <h2 className="text-2xl text-gray-400"> 9 months (06.22 - 03.23)</h2>
              <a href="https://www.footballco.com/" target="_blank" className="text-xl text-gray-400"> Company website</a>
              <h3 className="text-xl w-[20rem] pb-3 leading-8 pt-5"> {footballcoText} </h3>
              <div className=" grid grid-cols-4 gap-3 pt-5 pb-5 sm:pb-0">
                <TechLabel text="SwiftUI"/>
                <TechLabel text="Firebase"/>
                <TechLabel text="RxSwift"/>
                <TechLabel text="Resolver"/>
                <TechLabel text="Kombine"/>
                <TechLabel text="Jira"/>
                <TechLabel text="KMM"/>
              </div>
            </div>
            <div className="flex justify-center">
              <IphoneImage image={"/goal1.png"}/>
              <IphoneImage image={"/goal2.png"}/>
              <IphoneImage image={"/goal3.png"}/>
            </div>
            
           </div>
          </div>
    )
}