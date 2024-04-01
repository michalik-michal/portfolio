import TechLabel from "../common/TechLabel"
import IphoneImage from "../common/IphoneImage"
import nitchText from "./nitchText"


export default function Nitch() {
    return (
        <div  className="bg-black h-auto flex flex-col pt-24">
           <div className="flex flex-col sm:flex-row justify-center">
            <div className="pr-12 px-8">
            <div className="pr-12 flex row">
              <h1 className="text-4xl pr-3"> Nitch </h1>
            </div>
            <h3 className="text-xl w-[20rem] pb-3 leading-8 pt-5"> {nitchText} </h3>
            <div className="grid grid-cols-3 gap-3 pt-5 pb-5 sm:pb-0">
                <TechLabel text="SwiftUI"/>
                <TechLabel text="Firebase"/>
                <TechLabel text="Authentication"/>
                <TechLabel text="Family Controls"/>
                <TechLabel text="Device Activity"/>
              </div>
            </div>
            <div className="flex justify-center gap-5">
              <IphoneImage image={"/nitch1.png"}/>
              <IphoneImage image={"/nitch2.png"}/>
              <IphoneImage image={"/nitch3.png"}/>
            </div>
           </div>
          </div>
    )
}