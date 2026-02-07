
import React, { useState } from 'react';

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const CaricatureFace: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(100 100)" stroke="currentColor" strokeWidth="4" fill="none">
      {/* Head */}
      <path d="M -70 0 a 70 80 0 1 0 140 0 a 70 80 0 1 0 -140 0" fill="#fefae0" />
      
      {/* Hair */}
      <path d="M -60 -75 Q -40 -95 0 -90 T 60 -75 L 70 -40 Q 0 -20 -70 -40 Z" strokeLinejoin="round" strokeLinecap="round" fill="currentColor" />

      {/* Left Eye */}
      <circle cx="-35" cy="-20" r="10" fill="#fefae0" />
      <circle cx="-32" cy="-22" r="4" fill="currentColor" />

      {/* Right Eye */}
      <ellipse cx="35" cy="-25" rx="12" ry="8" fill="#fefae0" />
      <circle cx="38" cy="-24" r="3" fill="currentColor" />

      {/* Nose */}
      <path d="M 0 -10 C 10 5, -10 15, 0 25" strokeLinecap="round" />

      {/* Mouth */}
      <path d="M -30 45 Q 0 65 40 40" strokeLinecap="round" fill="none" />
    </g>
  </svg>
);


export default function App() {
  const [copyButtonText, setCopyButtonText] = useState<string>('Copy CA');

  const contractAddress = 'CA: xxxxxxxxxxxxxxxxxxxxxxxx';
  const promptText = "Create a caricature of me and my job based on everything you know about me.";

  const handleRedirect = () => {
    const encodedPrompt = encodeURIComponent(promptText);
    const chatGptUrl = `https://chat.openai.com/?prompt=${encodedPrompt}`;
    window.open(chatGptUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
      setCopyButtonText('Copied!');
      setTimeout(() => {
        setCopyButtonText('Copy CA');
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
      setCopyButtonText('Failed!');
       setTimeout(() => {
        setCopyButtonText('Copy CA');
      }, 2000);
    });
  };

  return (
    <div className="min-h-screen bg-paper text-pencil flex flex-col items-center justify-center p-4 overflow-hidden font-gaegu selection:bg-highlight selection:text-paper">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/crissxcross.png')] opacity-20"></div>
      
      <header className="absolute top-0 left-0 w-full flex justify-between items-center p-4 sm:p-6 z-10">
        <h1 className="font-bangers text-3xl sm:text-4xl text-pencil drop-shadow-lg transform -rotate-2">
          Caricature
        </h1>
        <a 
          href="https://x.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-pencil hover:text-accent transition-transform duration-300 hover:scale-110"
        >
          <XIcon className="h-8 w-8 sm:h-10 sm:w-10" />
        </a>
      </header>
      
      <main className="flex flex-col items-center text-center z-10 w-full max-w-2xl px-4">
        <CaricatureFace className="w-48 h-48 sm:w-56 sm:h-56 text-pencil animate-float" />
        
        <div className="bg-white/50 border-2 border-dashed border-pencil p-6 rounded-lg shadow-lg transform -rotate-1 mt-4">
          <h2 className="font-bangers text-4xl md:text-6xl lg:text-7xl text-pencil leading-tight drop-shadow-md">
            "Create a caricature of me and my job based on everything you know about me.”
          </h2>
        </div>

        <p className="text-xl sm:text-2xl mt-8 mb-6 text-ink max-w-lg font-bold">
          Click the button, send the prompt to ChatGPT, and see what it draws up! Also, ask it to generate and send an image of itself.
        </p>

        <button 
          onClick={handleRedirect}
          className="font-bangers text-2xl sm:text-3xl bg-accent text-paper px-10 py-4 rounded-full border-4 border-pencil shadow-[8px_8px_0px_rgba(40,54,24,1)] hover:shadow-[10px_10px_0px_rgba(40,54,24,1)] active:shadow-[4px_4px_0px_rgba(40,54,24,1)] active:translate-x-1 active:translate-y-1 transition-all duration-150 transform hover:-rotate-1"
        >
          Generate My Caricature!
        </button>

        <div className="mt-12 bg-white/50 border-2 border-pencil p-3 sm:p-4 rounded-lg flex items-center justify-center gap-4 shadow-md transform rotate-1">
          <p className="font-mono text-sm sm:text-base text-ink break-all">
            {contractAddress}
          </p>
          <button 
            onClick={handleCopy}
            className="bg-ink text-paper text-sm font-bold px-4 py-2 rounded-md hover:bg-pencil transition-colors duration-200 whitespace-nowrap"
          >
            {copyButtonText}
          </button>
        </div>
      </main>
      
      <footer className="absolute bottom-4 text-center text-ink/70 text-sm z-10">
          <p>$CARICATURE is a meme coin with no intrinsic value or expectation of financial return. For entertainment purposes only.</p>
          <p>Published for Vercel.</p>
      </footer>
    </div>
  );
}
