import IphoneImage from "../common/IphoneImage"
import TechLabel from "../common/TechLabel"
import { FaAppStoreIos, FaGithub } from "react-icons/fa"
import quickMathText from "./quickmathText"

export default function QuickMath() {
    return (
        <div className="bg-black h-4/6 flex flex-col pt-48">
        <div className="flex flex-col-reverse sm:flex-row justify-center">
         <div className="flex justify-center">
           <IphoneImage image={"/qm1.png"}/>
           <IphoneImage image={"/qm2.png"}/>
           <IphoneImage image={"/qm3.png"}/>
         </div> 
         <div className="pl-12 px-8">
         <div className="pr-12 flex row">
           <h1 className="text-4xl pr-3"> Quick Math </h1>
           <a href="https://apps.apple.com/pl/app/quick-mathematics/id1621110947" target={"_blank"} className="pt-1.5 text-blue-400"><FaAppStoreIos className="w-8 h-8"/></a>
           <a href="https://github.com/michalik-michal/QuickMath" target="_blank" className="pt-1 pl-4"> <FaGithub className="w-8 h-8"></FaGithub></a>
         </div>
         <h3 className="text-xl w-[20rem] pb-3 leading-8 pt-5"> {quickMathText} </h3>
         <div className="grid grid-cols-4 gap-3 pt-5 pb-5 sm:pb-0">
             <TechLabel text="SwiftUI"/>
             <TechLabel text="UIKit"/>
           </div>
         </div>
        </div>
        </div>
    )
}