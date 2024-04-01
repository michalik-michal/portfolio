import amwayText from "./amwayText";
import TechLabel from "../common/TechLabel"
import IphoneImage from "../common/IphoneImage"
import {timePassedSince } from "components/utils/timePassedSince.jsx";

export default function AmwaySection() {
    return(
        <div name="experience" className="bg-black h-auto flex flex-col pt-28 sm:pb-[8rem] ">
           <div className="flex flex-col sm:flex-row justify-center"> 
           <div className="flex justify-center gap-5">
              <IphoneImage image={"/amway1.png"}/>
              <IphoneImage image={"/amway2.png"}/>
              <IphoneImage image={"/amway3.png"}/>
            </div>
            <div className="pr-12 px-8">
            <div className="pr-12  flex flex-row">
              <h1 className="text-4xl pr-3"> Amway</h1>
            </div>
              <h2 className="text-2xl text-gray-400"> {timePassedSince("March 1, 2023")} (03.23 - current)</h2>
              <a href="https://www.amway.com/en_US/about-amway" target="_blank" className="text-xl text-gray-400"> Company website</a>
              <h3 className="text-xl w-[20rem] pb-3 leading-8 pt-5"> {amwayText} </h3>
              <div className=" grid grid-cols-3 gap-3 pt-5 pb-5 sm:pb-0">
                <TechLabel text="SwiftUI"/>
                <TechLabel text="Firebase"/>
                <TechLabel text="UIKit"/>
                <TechLabel text="ContentStack"/>
                <TechLabel text="Heap"/>
                <TechLabel text="SonarQube"/>
              </div>
            </div>
           </div>
          </div>
    )
}