import SocialIcons from "@/components/SocialIcons";
import NavBar from "@/components/NavBar"
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
      <div>
        <NavBar/>
        <div className='h-screen bg-black text-white'>
          <SocialIcons/>
          <HeroSection/>
        </div>
      </div>
    )
}
