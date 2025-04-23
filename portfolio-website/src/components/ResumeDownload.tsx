'use client';

import { useState } from 'react';

export function ResumeDownload() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const downloadResume = () => {
    // Create a link to your resume file
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Make sure to add your resume.pdf to the public folder
    link.download = 'Vicky_Ye_Resume.pdf'; // Name that will appear when downloading
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    closeModal();
  };

  return (
    <>
      {/* Resume Icon Button */}
      <button
        onClick={openModal}
        className="text-[var(--cream)] hover:text-[var(--solid-orange-10)] transition-colors"
        aria-label="Download Resume"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      </button>

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
          {/* Modal */}
          <div className="bg-[var(--discord-gray)] rounded-lg shadow-xl p-6 max-w-sm w-full border border-[var(--discord-lighter-gray)]">
            <h3 className="text-xl font-semibold text-[var(--cream)] mb-4">Download Resume</h3>
            <p className="text-[var(--cream)] mb-6">Would you like to download Vicky&apos;s resume?</p>
            
            <div className="flex justify-end space-x-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-[var(--discord-lighter-gray)] text-[var(--cream)] rounded hover:bg-opacity-80 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={downloadResume}
                className="px-4 py-2 bg-[var(--solid-orange-10)] text-[var(--discord-gray)] rounded hover:bg-[var(--dark-orange)] transition-colors"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}