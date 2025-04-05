'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Projects = () => {
  const projectTitleRef = useRef<HTMLParagraphElement>(null);

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

    const currentRef = projectTitleRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      // Use the stored value in the cleanup function
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div id="personal-projects" className="bg-[var(--discord-gray)] py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <p 
          id="project-title" 
          ref={projectTitleRef} 
          className="mx-auto mt-2 max-w-5xl opacity-0 transition-opacity duration-1000 text-balance text-center text-4xl font-semibold tracking-tight text-[var(--light-orange-10)] sm:text-5xl"
        >
          Things I have worked on...
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {/* ML Research Project */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-[var(--cream)] lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-2 pt-6 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Machine Learning Analysis & Data Visualization </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  As an <span className="font-semibold text-[var(--dark-orange)]">Machine Learning Research Intern</span> in the University of Toronto&apos;s Department of Industrial and Mechanical Engineering, 
                  I investigated factors of depression that best predict the eﬃcacy of antidepressant drug interventions. Performed data analysis and visualization for the ML models on clinical trial data, with the use of Scikit-Learn, Pandas, Matplotlib,
                  and Seaborn under the guidance of Dr. Martin Katzmann and Prof. Lu Wang. Communicated progress effectively with stakeholders at the S.T.A.R.T. Clinic for Mood & Anxiety Disorders in Toronto.
                </p> 
              </div>
              <div className="flex flex-1 items-center [container-type:inline-size]">
                <Image 
                  className="w-11/12 h-auto object-center ml-4"
                  src="/images/mlr_plot.png"
                  alt="Machine Learning plot"
                  width={500}
                  height={300}
                />
              </div>
              <div className="absolute h-full w-full bg-[var(--palette-blood-orange)]/90 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
                <Link href="#" className="text-white bg-[var(--discord-gray)] font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-[var(--discord-lighter-gray)]">In Progress...</Link>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow lg:rounded-l-[2rem]"></div>
          </div>

          {/* LeetCode Helper Extension */}
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-[var(--cream)] max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-[var(--discord-gray)] max-lg:text-center">LeetCode Helper Extension</p>
                <p className="mt-2 max-w-lg text-sm/6 text-[var(--discord-lighter-gray)] max-lg:text-center">Chrome extension that provides personalised feedback and allows users to optimise their solutions or receive assistance from a model towards deriving their solution.</p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <Image 
                  className="w-full max-lg:max-w-xs rounded-xl"
                  src="/images/pickle-ai.png"
                  alt="LeetCode Helper Extension"
                  width={400}
                  height={300}
                />
              </div>
              <div className="absolute h-full w-full bg-[var(--palette-sun-orange)]/90 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
                <a href="https://github.com/pickle-ai/pickle.ai.backend" className="text-white bg-[var(--discord-gray)] hover:bg-solid-orange-10 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-discord-lighter-gray dark:hover:bg-solid-orange-10">Repository</a>
                <div className="px-5"></div>
                <a href="https://devpost.com/software/pickle-ai" className="text-white bg-[var(--discord-gray)] hover:bg-solid-orange-10 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-discord-lighter-gray dark:hover:bg-solid-orange-10">Devpost</a>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow max-lg:rounded-t-[2rem]"></div>
          </div>

          {/* AQI Project */}
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-[var(--cream)]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Software Development & API Usage</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Created a responsive, user-friendly website interface that tracks real-time AQI & oﬀers tailored health recommendations 
                  using Weather, OpenAI,& AQI APIs.
                </p>
              </div>
              <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                <Image 
                  className="h-[min(152px,40cqw)] object-cover px-0.5"
                  src="/images/aqi.png"
                  alt="AQI Project"
                  width={500}
                  height={152}
                />
              </div>
              <div className="absolute h-full w-full bg-[var(--palette-blood-orange)]/90 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
                <a href="https://github.com/AQH-scale/AQH-scale.github.io" className="text-white bg-[var(--discord-gray)] hover:bg-solid-orange-10 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-discord-lighter-gray dark:hover:bg-solid-orange-10">Repository</a>
                <div className="px-5"></div>
                <a href="https://devpost.com/software/air-quality-health" className="text-white bg-[var(--discord-gray)] hover:bg-solid-orange-10 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-discord-lighter-gray dark:hover:bg-solid-orange-10">Devpost</a>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow"></div>
          </div>

          {/* Research Publication Project */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-[var(--cream)] max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Experimental Design & Research Publication</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  As a <span className="font-semibold text-dark-orange">Undergraduate Research Assistant</span>, Analyzed ML models which were trained with the GEMINI dataset to predict delirium in hospitalized patients and evaluated model stability over time under
                  the guidance of Prof. Lu Wang. Primary developmental manuscript drafter and co-author for a tentative publication on the 
                  <span className="font-semibold text-dark-orange"> Journal of American Medical Informatics (JAMIA)</span>.  
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <Image 
                  className="w-full max-lg:max-w-xs rounded-xl"
                  src="/images/paper_writing.png"
                  alt="Research Publication"
                  width={400}
                  height={300}
                />
              </div>
              <div className="absolute h-full w-full bg-[var(--palette-sun-orange)]/90 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
                <Link href="#" className="text-white bg-[var(--discord-gray)] font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-discord-lighter-gray">In Progress...</Link>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};