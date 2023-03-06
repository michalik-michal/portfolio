import SocialIcons from "@/components/SocialIcons";
import Footer from "@/components/common/Footer";
import NavBar from "@/components/NavBar"
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import ExperienceHeader from "@/components/experience/ExperienceHeader";
import SkiDay from "@/components/myprojects/SkiDay";
import MyProjectsHeader from "@/components/myprojects/MyProjectsHeader";


export default function Home() {
  return (
      <div>
        <NavBar/>
        <div className='h-screen bg-black text-white'>
          <SocialIcons/>
          <HeroSection/>
          <ExperienceHeader/>
          <ExperienceSection/>
          <MyProjectsHeader/>
          <SkiDay/>
          <Footer/>
        </div>
      </div>
    )
}
