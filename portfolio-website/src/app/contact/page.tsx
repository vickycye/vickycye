export default function Contact() {
    return (
      <div className="mt-24 px-4 py-12 max-w-screen-lg mx-auto">
        <h1 className="text-4xl font-bold text-cream">Contact</h1>
        <p className="mt-6 text-cream">Feel free to reach out via social media or email.</p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-cream">Connect with me</h2>
          <div className="mt-4 flex flex-col space-y-2">
            <a 
              href="https://github.com/vickycye" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-light-orange-10 hover:text-cream transition-colors"
            >
              GitHub: @vickycye
            </a>
            <a 
              href="https://linkedin.com/in/vickycye" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-light-orange-10 hover:text-cream transition-colors"
            >
              LinkedIn: vickycye
            </a>
            <a 
              href="https://www.instagram.com/vickyyeeeeeeeeezi/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-light-orange-10 hover:text-cream transition-colors"
            >
              Instagram: @vickyyeeeeeeeeezi
            </a>
          </div>
        </div>
      </div>
    );
  }