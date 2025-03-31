import Image from 'next/image';

export const Hero = () => {
  return (
    <>
      {/* Moving rectangle background */}
      <div className="w-full h-lvh bg-discord-gray overflow-hidden">
        <div className="relative top-0 pt-100 w-screen h-1/8 bg-rectangle-orange1 opacity-70 animate-slideloopleft1"></div>
        <div className="relative top-2.5 pt-100 w-screen h-1/8 bg-rectangle-orange2 opacity-70 animate-slideloopright1"></div>
        <div className="relative top-5 pt-100 w-screen h-1/8 bg-rectangle-orange3 opacity-70 animate-slideloopleft2"></div>
        <div className="relative top-8 pt-100 w-screen h-1/8 bg-rectangle-orange4 opacity-70 animate-slideloopright2"></div>
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

      {/* Quote section */}
      <div className="bg-solid-orange-10 py-24 sm:py-32">
        <div id="animate-me" className="mx-auto opacity-0 max-w-7xl px-6 lg:px-8">
          <div className="text-center text-6xl font-semibold tracking-tight text-discord-lighter-gray">
            "Absorb what is useful, Discard what is not, Add what is <span className="transition ease-in-out text-pinkish-red hover:-translate-y-1 hover:text-white duration-300">uniquely your own</span>."
          </div>
          <div className="text-right text-2xl font-semibold text-discord-lighter-gray mr-[10%] mt-[3%]">— Bruce Lee</div>
        </div>
      </div>
    </>
  );
};