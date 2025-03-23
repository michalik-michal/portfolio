import SocialIcons from "@/components/common/SocialIcons";
import Footer from "@/components/common/Footer";
import NavBar from "@/components/NavBars/NavBar"
import HeroSection from "@/components/HeroSection";
import FootballCoSection from "@/components/experience/footballcoSection";
import ExperienceHeader from "@/components/experience/ExperienceHeader";
import SkiDay from "@/components/myprojects/SkiDay";
import MyProjectsHeader from "@/components/myprojects/MyProjectsHeader";
import SignIn from "@/components/myprojects/SignIn";
import MoreProjectsButton from '@/components/common/MoreProjectsButton.jsx';
import QuickMath from "@/components/myprojects/QuickMath";
import Head from "next/head";
import AmwaySection from "@/components/experience/amwaySection";
import Nitch from "@/components/myprojects/Nitch";


export default function Home() {
  return (
      <div>
        <NavBar/>
        <Head>
        <link rel="shortcut icon" href="favicon.png" />
        <title> Michał Michalik </title>
        </Head>
        <div className='bg-black text-white'>
          <SocialIcons/>
          <ExperienceHeader/>
          <AmwaySection/>
          <FootballCoSection/>
          <MyProjectsHeader/>
          <Nitch/>
          <SkiDay/>
          <QuickMath/>
          <SignIn/>
          <MoreProjectsButton/>
          <Footer/>
        </div>
      </div>
    )
}
