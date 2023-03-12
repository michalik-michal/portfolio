import AboutMeNavBar from "@/components/NavBars/AboutMeNavbar.jsx";
import SocialIcons from "@/components/common/SocialIcons";

const gallupLink = "https://content.reportdeliverables.gallup.com/batch-service/job-results/SFPDFJobProcessor/pdf/signature-theme-501-0-78330497-20230311052130254000000-frePoL.pdf?AQICAHgzfZgYUqd6ZWXb2yF62L2U09mbhybZV3pxLV1pF/oRUQHcCSTKlxRMzG8yV7ZeKHFYAAABAjCB/wYJKoZIhvcNAQcGoIHxMIHuAgEAMIHoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDOfkIUOgmEtIqy4mXwIBEICBuoXdfBkXsIcHzDBXAVEa3WH7uCWemYOzYfQO1FpUJbO/5Q1t+a4KrSCFIECwiDF+N1itqaVplJe9gYuSr26JyGGORQmeK1QPAZx4OAKfJuIe7bDK3/uY9Zrfq93e70PdKVepCfhAY7Pn4WjyNq3o4HNUuv1ZWUmUcYioN2aSRs7rx2Ovo5og2HsRjASTkag0z/Uo51ecjYpcYX5wLyKGBTEh4OKEPqlKX6DQlIllJ2gir3VKeE1EUFDtLg=="

export default function AboutMeSection() {
    return(
        <div className="z-30 ">
            <AboutMeNavBar/>
            <div className=" text-white z-30 h-screen w-screen">
                <SocialIcons/>
                <div className="h-full flex flex-col justify-center">
                    <div className="flex flex-row justify-center">
                        <div className="pl-12">
                            <div className="flex flex-row pb-5">
                                <img className="w-24 h-24 rounded-full" src="/me.jpeg"></img>
                                <h1 className="text-3xl sm:text-5xl font-bold pl-4 pt-4 "> Michal Michalik </h1>
                            </div>
                            <h2 className="text-xl sm:text-3xl sm:w-[40rem] sm:leading-relaxed pb-5"> I am an ex athlete. I was a long time member of the Polish Alpine Skiing National Team. I started coding around 2020 and I quit professional sport in the beggining of 2022 to start working as software engeneer.</h2>
                            <a href={gallupLink} target="_blank" className="text-l sm:text-xl bg-gray-500 p-4 rounded-md hover:font-semibold"> See My Clifton Strengths Test ✏️ </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}