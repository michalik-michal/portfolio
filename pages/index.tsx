import { TbMail } from "react-icons/tb";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const email = "contact@michalmichalik.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
      toast.success("Email copied to clipboard");
    } catch (err) {
      toast.error("Failed to copy email");
    }
  };

  return (
          <div className="min-h-screen w-full flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <button
            onClick={handleCopy}
            className="flex items-center gap-3 text-gray-300 hover:text-gray-100 transition-colors text-2xl focus:outline-none"
            type="button"
          >
            <span className="text-gray-400 hover:text-gray-100 transition-colors duration-300">{email}</span>
          </button>
          
          {/* About Button */}
          <button
            onClick={() => setShowAbout(!showAbout)}
            className="mt-6 text-gray-400 hover:text-gray-300 transition-colors duration-300 text-lg"
          >
            {showAbout ? 'Hide About' : 'About'}
          </button>
          
          {/* Foldable About Section */}
          {showAbout && (
            <div className="mt-4 text-center max-w-2xl animate-in fade-in duration-300">
              <p className="text-gray-300 text-lg leading-relaxed">
                I am soloproneur creating mobile apps for iOS and Generative AI applications
              </p>
            </div>
          )}
        </div>
        <Toaster />
        
        {/* Footer */}
        <footer className="absolute bottom-8 text-center">
          <div className="text-gray-500 text-sm space-y-1">
            <p>Address</p>
            <p>Piotra Borowego 35, Kraków 30-215</p>
            <a
              href="https://aleo.com/pl/firma/michal-michalik508"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-300 transition-colors"
            >
              NIP: 6772519863
            </a>
          </div>
        </footer>
      </div>
  );
}