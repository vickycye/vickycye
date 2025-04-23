'use client';
import { useEffect, useCallback } from 'react';
import { ResumeDownload } from './ResumeDownload';

// TypeScript declaration for the global window object
declare global {
  interface Window {
    copyEmail?: (event: React.MouseEvent, email: string) => void;
  }
}

export const Footer = () => {
  // Define the copyEmail function using useCallback
  const copyEmail = useCallback((event: React.MouseEvent, email: string) => {
    event.preventDefault();
    navigator.clipboard.writeText(email).then(() => {
      const message = document.getElementById('email-copied-message');
      if (message) {
        message.classList.remove('opacity-0');
        message.classList.add('opacity-100');
        
        setTimeout(() => {
          message.classList.remove('opacity-100');
          message.classList.add('opacity-0');
        }, 2000);
      }
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }, []);

  useEffect(() => {
    // Add the function to the window object
    window.copyEmail = copyEmail;
    
    // Cleanup function
    return () => {
      window.copyEmail = undefined;
    };
  }, [copyEmail]);

  return (
    <section className="bg-[var(--discord-gray)]">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          {/* Additional footer links can be added here */}
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          {/* Email with Copy */}
          <div className="relative inline-block" id="email-container">
            <a 
              href="#" 
              className="text-cream hover:text-[var(--solid-orange-10)]" 
              onClick={(e) => copyEmail(e, 'vickyye@uw.edu')}
              aria-label="Copy email address"
            >
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
              </svg>
            </a>
            <div 
              id="email-copied-message" 
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 transition-opacity"
            >
              Email copied!
            </div>
          </div>
          {/* Instagram */}
          <a href="https://www.instagram.com/vickyyeeeeeeeeezi/" className="text-cream hover:text-[var(--pinkish-red)]" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
            </svg>
          </a>

          {/* Github */}
          <a href="https://github.com/vickycye" className="text-cream hover:text-[var(--lighter-ish-gray)]" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="https://linkedin.com/in/vickycye" target="_blank" rel="noopener noreferrer">
            <span className="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-[var(--cream)] hover:[&>svg]:fill-[var(--linkedin-blue)]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
            </span>
          </a>
          {/* Resume Download */}
          <ResumeDownload />
        </div>
        <p className="mt-6 text-base leading-6 text-center text-light-orange-10 opacity-60">
          © {new Date().getFullYear()} Vicky Ye. All rights reserved.
        </p>
      </div>
    </section>
  );
};