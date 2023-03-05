import SocialIcons from "@/components/SocialIcons";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
      <div>
        <NavBar/>
        <div className='h-screen bg-black text-white'>
          <SocialIcons/>
        </div>
      </div>
    )
}
