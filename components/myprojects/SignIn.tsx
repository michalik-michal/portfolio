import TechLabel from "../common/TechLabel"
import IphoneImage from "../common/IphoneImage"
import signInText from "./signInText"
import { FaGithub } from "react-icons/fa";


export default function SignIn() {
    return (
        <div  className="bg-black h-auto flex flex-col pt-24">
           <div className="flex flex-col sm:flex-row justify-center">
            <div className="pr-12 px-8">
            <div className="pr-12 flex row">
              <h1 className="text-4xl pr-3"> Sign In</h1>
              <a href="https://github.com/michalik-michal/SignIn" target="_blank" className="pt-1"> <FaGithub className="w-8 h-8"></FaGithub></a>
            </div>
            <h3 className="text-xl w-[20rem] pb-3 leading-8 pt-5"> {signInText} </h3>
            <div className="grid grid-cols-4 gap-3 pt-5 pb-5 sm:pb-0">
                <TechLabel text="SwiftUI"/>
              </div>
            </div>
            <div className="flex justify-center gap-5">
              <IphoneImage image={"/SignIn1.png"}/>
              <IphoneImage image={"/SignIn2.png"}/>
              <IphoneImage image={"/SignIn3.png"}/>
            </div>
           </div>
          </div>
    )
}