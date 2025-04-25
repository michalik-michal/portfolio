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
        <div style={{ width: '150vw', height: '20vw', maxWidth: '1500px' }}>
          <TextHoverEffect 
            text="under construction..." 
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
