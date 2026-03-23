'use client';

import { useState } from 'react';
import Image from 'next/image';
import { DownloadTracker } from './DownloadTracker';
import { DownloadCount } from './DownloadCount';

const PROJECTS = [
  {
    id: 'ml-research',
    tabLabel: 'ML Research',
    title: 'Machine Learning Analysis & Data Visualization',
    description: (
      <>
        As an <span className="font-semibold text-[var(--dark-orange)]">Machine Learning Research Intern</span> in the
        University of Toronto&apos;s Department of Industrial and Mechanical Engineering, I investigated factors of
        depression that best predict the efficacy of antidepressant drug interventions. Performed data analysis and
        visualization for the ML models on clinical trial data, with the use of Scikit-Learn, Pandas, Matplotlib, and
        Seaborn under the guidance of Dr. Martin Katzmann and Prof. Lu Wang. Communicated progress effectively with
        stakeholders at the S.T.A.R.T. Clinic for Mood & Anxiety Disorders in Toronto.
      </>
    ),
    image: { src: '/images/mlr_plot.png', alt: 'Machine Learning plot' },
    link: { href: '#', label: 'Writeup coming after finals...' },
    overlayColor: 'bg-[var(--palette-blood-orange)]/90',
  },
  {
    id: 'leetcode',
    tabLabel: 'LeetCode Helper',
    title: 'LeetCode Helper Extension',
    description: 'Chrome extension that provides personalised feedback and allows users to optimise their solutions or receive assistance from a model towards deriving their solution.',
    image: { src: '/images/pickle-ai.png', alt: 'LeetCode Helper Extension' },
    links: [
      { href: 'https://github.com/pickle-ai/pickle.ai.backend', label: 'Repository' },
      { href: 'https://devpost.com/software/pickle-ai', label: 'Devpost' },
    ],
    overlayColor: 'bg-[var(--palette-sun-orange)]/90',
  },
  {
    id: '3d-reconstruction',
    tabLabel: '3D Reconstruction',
    title: 'Meshify: Video-to-3D Reconstruction',
    description: 'Built a hybrid 3D reconstruction pipeline that converts smartphone video into surface meshes by combining Structure-from-Motion for camera pose estimation with Depth Anything V2 for monocular depth prediction. My contributions focused on depth estimation, refining COLMAP\'s sparse reconstruction, and running experiments across multiple indoor scenes. We benchmarked our approach against COLMAP and DUSt3R, finding that DUSt3R achieved the best speed-quality tradeoff at a fraction of COLMAP\'s runtime.',
    image: { src: '/images/cse_lounge.png', alt: '3D Reconstruction Project' },
    overlayText: 'Studying for finals...',
    overlayColor: 'bg-[var(--palette-blood-orange)]/80',
    pdfSection: {
      description:
        'View the project writeup here. This was submitted as a final project for the course CSE 455: Computer Vision.',
      filePath: '/documents/3d_reconstruction_455.pdf',
      downloadLabel: 'Download PDF',
    },
  },
  {
    id: 'research-publication',
    tabLabel: 'Research Publication',
    title: 'Experimental Design & Research Publication',
    description: (
      <>
        As a <span className="font-semibold text-[var(--dark-orange)]">Undergraduate Research Assistant</span>, Analyzed ML
        models which were trained with the GEMINI dataset to predict delirium in hospitalized patients and evaluated
        model stability over time under the guidance of Prof. Lu Wang. Primary developmental manuscript drafter and
        co-author for a tentative publication on the{' '}
        <span className="font-semibold text-[var(--dark-orange)]">Journal of American Medical Informatics (JAMIA)</span>.
      </>
    ),
    image: { src: '/images/JAMIA.png', alt: 'Research Publication' },
    imageSize: 'large' as const,
    link: { href: '#', label: 'Pending Review...' },
    overlayColor: 'bg-[var(--palette-sun-orange)]/90',
  },
];

export function ProjectTabbedLayout() {
  const [activeIndex, setActiveIndex] = useState(0);
  const project = PROJECTS[activeIndex];

  return (
    <div id="personal-projects" className="min-h-[80vh] flex flex-col bg-[var(--discord-gray)]">
      {/* Heading section with color separation */}
      <div className="bg-[var(--discord-lighter-gray)] border-b border-[var(--palette-dark-gray)]">
        <p className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6 text-center text-4xl sm:text-3xl font-semibold tracking-tight text-[var(--light-orange-10)]">
          Things I have worked on...
        </p>
      </div>
      <div className="flex flex-col lg:flex-row flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
      {/* Left tabs - aligned with About Me text */}
      <aside className="lg:w-64 shrink-0 pt-6 lg:pt-8 border-b lg:border-b-0 lg:border-r border-[var(--discord-lighter-gray)] bg-[var(--discord-gray)] pr-0">
        <nav className="flex lg:flex-col overflow-x-auto lg:overflow-visible">
          {PROJECTS.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActiveIndex(i)}
              className={`px-4 py-4 text-left whitespace-nowrap transition-colors border-l-2 lg:border-l-0 lg:border-r-2 -mb-px ${
                activeIndex === i
                  ? 'border-[var(--light-orange-10)] bg-[var(--discord-lighter-gray)]/50 text-[var(--cream)] font-medium'
                  : 'border-transparent text-[var(--off-white)]/80 hover:bg-[var(--discord-lighter-gray)]/30 hover:text-[var(--cream)]'
              }`}
            >
              {p.tabLabel}
            </button>
          ))}
        </nav>
      </aside>

      {/* Right content */}
      <main className="flex-1 py-6 lg:py-8 pl-6 lg:pl-10 overflow-auto">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-[var(--cream)] sm:text-2xl">
                {project.title}
              </h2>
              <p className="mt-4 text-sm/6 text-[var(--off-white)] sm:text-base">
                {project.description}
              </p>
            </div>
            <div className="relative flex items-center justify-center px-6 pb-6 sm:px-8 sm:pb-8">
              <div
                className={`relative w-full rounded-xl overflow-hidden ${
                  'imageSize' in project && project.imageSize === 'large'
                    ? 'max-w-7xl w-full aspect-video'
                    : 'max-w-xl aspect-video'
                }`}
              >
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  className="object-contain"
                  sizes={
                    'imageSize' in project && project.imageSize === 'large'
                      ? '(max-width: 768px) 100vw, 1280px'
                      : '(max-width: 768px) 100vw, 576px'
                  }
                />
              </div>
            </div>
            {'pdfSection' in project && project.pdfSection && (
              <div className="mt-8 p-6 sm:p-8 rounded-xl bg-[var(--discord-lighter-gray)]/50 border border-[var(--palette-dark-gray)]">
                <h3 className="text-lg font-semibold text-[var(--cream)] mb-3">
                  Project Writeup
                </h3>
                <p className="text-sm/6 text-[var(--off-white)] mb-4">
                  {project.pdfSection.description}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <DownloadTracker
                    fileId="3d-reconstruction-pdf"
                    href={project.pdfSection.filePath}
                    downloadFilename="3d-reconstruction.pdf"
                    className="inline-flex items-center px-4 py-2 bg-[var(--light-orange-10)] text-[var(--discord-gray)] font-medium rounded-lg hover:bg-[var(--dark-orange)] hover:text-white transition-colors"
                  >
                    {project.pdfSection.downloadLabel}
                  </DownloadTracker>
                  <DownloadCount
                    fileId="3d-reconstruction-pdf"
                    className="text-sm text-[var(--off-white)]/70"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      </div>
    </div>
  );
}
