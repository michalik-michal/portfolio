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
import { TextHoverEffect } from "@/components/common/text-hover-effect";
import { TbMail } from "react-icons/tb";
import { toast, Toaster } from "react-hot-toast";

export default function Home() {
  const handleEmailClick = () => {
    navigator.clipboard.writeText('michalpiotr.michalik@gmail.com');
    toast.success("Email copied to clipboard");
  };

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden">
      <Toaster position="top-center" />
      
      <main className="flex-1 flex items-center justify-center">
        <div style={{ width: '100vw', height: '90vh', maxWidth: '2400px' }}>
          <TextHoverEffect 
            text="i'ts coming..." 
          />
        </div>
      </main>
      
      <footer className="flex flex-col items-center py-6">
        <button 
          onClick={handleEmailClick} 
          className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors duration-300"
        >
          <TbMail className="w-6 h-6" />
          <span className="text-lg">michalpiotr.michalik@gmail.com</span>
        </button>
      </footer>
    </div>
  );
}
