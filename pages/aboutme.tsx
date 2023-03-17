import AboutMeSection from "@/components/aboutme/AboutMeSection";

export default function Home() {
    return (
    <header className=" flex h-full overflow-hidden relative">
        <AboutMeSection/>
        <video  src="Michal.mp4" autoPlay muted className=" absolute z-10 w-auto min-w-full min-h-full max-w-none brightness-50"/>
    </header>

    )
}


