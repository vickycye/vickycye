'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export const AboutMe = () => {
  const aboutMeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutMeRef.current) {
      observer.observe(aboutMeRef.current);
    }

    return () => {
      if (aboutMeRef.current) {
        observer.unobserve(aboutMeRef.current);
      }
    };
  }, []);

  return (
    <div id="about" className="relative bg-discord-gray overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative pb-8 bg-discord-gray sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg 
            className="z-10 hidden lg:block absolute -right-20 inset-y-0 h-full w-48 text-light-orange-10 transform translate-x-1/2"
            fill="currentColor" 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none" 
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100"></polygon>
          </svg>
          <div className="pt-1"></div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div id="about-me" ref={aboutMeRef} className="opacity-0 transition-opacity duration-1000 sm:text-center lg:text-left">
              <h2 className="my-6 text-2xl tracking-tight font-extrabold text-cream sm:text-3xl md:text-4xl">
                About me
              </h2>
              <p className="text-cream">
                Hi! I am an undergraduate student studying <span className="font-bold text-solid-orange-10">Computer Science</span> at 
                the <span className="font-bold text-uw-purple">University of Washington's Paul Allen School for CSE</span>, 
                passionately pursuing a career in computer vision and artificial intelligence, with a focus on <span className="font-bold text-light-orange-10">image and video generation</span>. 
                I am dedicated to contributing to the rapidly expanding field of generative AI, particularly in creating hyperrealistic 
                images and cinematic-like videos. My approach emphasizes sourcing data from safe, ethical places, ensuring compliance with copyright restrictions. 
                Through innovative research and development, I aim to advance the boundaries of what is possible in generative AI while 
                maintaining a strong commitment to ethical practices. Additionally, I am focused on improving the quality of life for 
                professionals in fields such as image and video editing by developing tools that streamline workflows, enhance creativity, 
                and reduce manual effort.
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-[42.4%]">
        <Image 
          className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full" 
          src="/images/about_me.jpg" 
          alt="about me"
          width={600}
          height={400}
        />
      </div>
    </div>
  );
};