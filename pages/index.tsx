import SocialIcons from "@/components/common/SocialIcons";
import Footer from "@/components/common/Footer";
import NavBar from "@/components/NavBars/NavBar"
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import ExperienceHeader from "@/components/experience/ExperienceHeader";
import SkiDay from "@/components/myprojects/SkiDay";
import MyProjectsHeader from "@/components/myprojects/MyProjectsHeader";
import SignIn from "@/components/myprojects/SignIn";
import MoreProjectsButton from '@/components/common/MoreProjectsButton.jsx';


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
          <SignIn/>
          <MoreProjectsButton/>
          <Footer/>
        </div>
      </div>
    )
}
