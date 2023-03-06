import { timePassedSince } from "components/utils/timePassedSince.jsx"

export default function ExperienceHeader() {
    return(
        <div className="bg-black pl-32">
            <h1 className="text-4xl font-bold"> My Experience </h1>
            <h2 className="text-gray-400 text-2xl"> I currnently have {timePassedSince("June 1 2022")} of commertial experience. </h2>
          </div>
    )
}