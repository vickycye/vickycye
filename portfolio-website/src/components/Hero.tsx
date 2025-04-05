import Image from 'next/image';

export const Hero = () => {
  return (
    <>
      {/* Moving rectangle background */}
      <div className="w-full h-screen bg-discord-gray overflow-hidden">
        <div className="relative mt-10 w-screen h-16 bg-[var(--rectangle-orange1)] opacity-70 animate-slideloopleft1"></div>
        <div className="relative mt-10 w-screen h-16 bg-[var(--rectangle-orange2)] opacity-70 animate-slideloopright1"></div>
        <div className="relative mt-10 w-screen h-16 bg-[var(--rectangle-orange3)] opacity-70 animate-slideloopleft2"></div>
        <div className="relative mt-10 w-screen h-16 bg-[var(--rectangle-orange4)] opacity-70 animate-slideloopright2"></div>
      </div>

      {/* Name segment */}
      <div className="absolute opacity-0 animate-slideinrighttitle left-1/4 top-[60%] text-off-white text-8xl font-bold">Vicky</div>
      <div className="absolute opacity-0 animate-slideinrighttitle left-1/4 top-3/4 text-off-white text-8xl font-bold">Ye</div>

      {/* Image that is side by side with name */}
      <div className="flex justify-end mt-0">
        <Image 
          src="/images/website_vicky.webp" 
          alt="profile picture" 
          width={500}
          height={700}
          className="absolute top-[-31%] right-[15%] w-[40%] h-auto animate-slideinleftimage"
        />
      </div>
      
    </>
  );
};