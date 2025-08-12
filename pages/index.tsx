import { TbMail } from "react-icons/tb";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);
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
    <div className="min-h-screen w-full flex items-center justify-center">
      <button
        onClick={handleCopy}
        className="flex items-center gap-3 text-gray-300 hover:text-gray-100 transition-colors text-2xl focus:outline-none"
        type="button"
      >
        <span className="text-gray-400 hover:text-gray-100 transition-colors duration-300">{email}</span>
      </button>
      <Toaster />
    </div>
  );
}
