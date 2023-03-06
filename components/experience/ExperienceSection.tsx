import footballcoText from "./footballcoText"
import TechLabel from "../common/TechLabel"
import IphoneImage from "../common/IphoneImage"

export default function ExperienceSection() {
    return(
        <div name="experience" className="bg-black h-full flex flex-col pt-28">
           <div className="flex flex-row justify-center"> 
            <div className="pr-12">
              <h1 className="text-4xl"> GOAL </h1>
              <h2 className="text-2xl text-gray-400"> 9 months (06.22 - 03.23)</h2>
              <h3 className="text-xl w-[20rem] pb-3 leading-8 pt-5"> {footballcoText} </h3>
              <div className="grid grid-cols-4 gap-3 pt-5">
                <TechLabel text="SwiftUI"/>
                <TechLabel text="Firebase"/>
                <TechLabel text="RxSwift"/>
                <TechLabel text="Resolver"/>
                <TechLabel text="Kombine"/>
                <TechLabel text="Jira"/>
                <TechLabel text="KMM"/>
              </div>
            </div>
            <IphoneImage image={"/goal1.png"}/>
            <IphoneImage image={"/goal2.png"}/>
            <IphoneImage image={"/goal3.png"}/>
           </div>
          </div>
    )
}