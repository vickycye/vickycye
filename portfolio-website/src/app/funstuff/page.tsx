'use client';

import { useEffect } from 'react';
import Image from 'next/image';
// import Link from 'next/link';

// SpotifyEmbed component for better organization
function SpotifyEmbed({ trackId, height = 152 }: { trackId: string; height?: number }) {
  return (
    <iframe 
      style={{ borderRadius: '12px' }} 
      src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator`} 
      width="100%" 
      height={height} 
      frameBorder="0" 
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
      loading="lazy"
    />
  );
}

export default function FunStuff() {
  // Define track IDs for Spotify embeds
  const featuredTrackId = "5bOWPM362XpMa8zn6UR9te";
  const trackIds = [
    // Row 1
    "3kBfE92drjZEgYffx22zbl", "7efb5ypOZ6bDc533m69xbS", "3be9ACTxtcL6Zm4vJRUiPG",
    // Row 2
    "3s7IKFITafjRpv06BZyEoD", "1W7ughJhjRaANaAUcxTfnC", "299bs3nx4r3zcmLD8tRPi3",
    // Row 3
    "5XNkAu9Mhry1ud5q2TJocp", "210JJAa9nJOgNa0YNrsT5g", "02CrqOYzrJR8fYOffhvRZZ"
  ];

  // Add client-side animation classes with useEffect (if needed)
  useEffect(() => {
    // Any client-side animations or JS that needs to run after component mounts
  }, []);

  return (
    <>
      {/* About Me Section */}
      <div className="relative isolate overflow-hidden bg-[var(--discord-gray)] py-24 sm:py-32">
        <div className="absolute inset-0 -z-10">
          <Image 
            src="/images/nice_cruise_photo.png" 
            alt="Background"
            fill
            className="opacity-35 size-full object-cover object-right md:object-center"
            priority
          />
        </div>

        {/* Background decorations */}
        <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
          <div 
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[var(--rectangle-orange1)] to-[var(--palette-blood-orange)] opacity-20" 
            style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}
          ></div>
        </div>
        <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
          <div 
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[var(--rectangle-orange1)] to-[var(--palette-blood-orange)] opacity-20" 
            style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}
          ></div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 id="more-info-title" className="text-5xl font-semibold tracking-tight text-[var(--cream)] sm:text-7xl animate-slideinrighttitle">
              A Little Bit More About Me...
            </h2>
            <p className="mt-8 text-pretty text-lg font-medium text-[var(--off-white)] sm:text-xl/8 animate-fadeOut">
              Other than that, in my free time: I enjoy learning languages on Duolingo, I play video games, and love listening to music. I&apos;m also playing
              intramural ultimate frisbee at my university!
            </p>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-5 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-[var(--cream)] animate-slideinright">Languages</dt>
                <dd className="text-4xl font-semibold tracking-tight text-[var(--light-orange-10)] animate-slideinleft">3</dd>
              </div>
              <div className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-[var(--cream)] animate-slideinright">Hackathons Attended</dt>
                <dd className="text-4xl font-semibold tracking-tight text-[var(--light-orange-10)] animate-slideinleft">6</dd>
              </div>
              <div className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-[var(--cream)] animate-slideinright">WPM Typing Speed</dt>
                <dd className="text-4xl font-semibold tracking-tight text-[var(--light-orange-10)] animate-slideinleft">150+</dd>
              </div>
              <div className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-[var(--cream)] animate-slideinright">Minutes of Spotify in 2025</dt>
                <dd className="text-4xl font-semibold tracking-tight text-[var(--light-orange-10)] animate-slideinleft">43,779</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Favorite Songs Section */}
      <div className="bg-[var(--discord-lighter-gray)] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-2">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 id="fav-songs" className="text-pretty text-4xl font-semibold tracking-tight text-[var(--light-orange-10)] sm:text-5xl animate-slideinrighttitle">
              Current Favorite Songs
            </h2>
          </div>

          {/* Featured song */}
          <div className="mx-auto max-w-2xl pt-16 -mb-16">
            <SpotifyEmbed trackId={featuredTrackId} height={252} />
          </div>

          {/* First row of songs */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 -mb-28 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <SpotifyEmbed trackId={trackIds[0]} />
            <SpotifyEmbed trackId={trackIds[1]} />
            <SpotifyEmbed trackId={trackIds[2]} />
          </div>

          {/* Second row of songs */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 -mb-28 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <SpotifyEmbed trackId={trackIds[3]} />
            <SpotifyEmbed trackId={trackIds[4]} />
            <SpotifyEmbed trackId={trackIds[5]} />
          </div>

          {/* Third row of songs */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 -mb-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <SpotifyEmbed trackId={trackIds[6]} />
            <SpotifyEmbed trackId={trackIds[7]} />
            <SpotifyEmbed trackId={trackIds[8]} />
          </div>
        </div>
      </div>
    </>
  );
}