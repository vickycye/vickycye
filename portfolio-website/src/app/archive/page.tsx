import Image from 'next/image';

export default function Archives() {
  return (
    <div className="bg-[var(--discord-gray)] min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl font-semibold tracking-tight text-[var(--light-orange-10)] sm:text-5xl mb-16 text-center">
          Archives
        </h1>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {/* AQI Project - Archived */}
          <div className="relative overflow-hidden rounded-2xl bg-[var(--cream)] shadow-lg">
            <div className="flex h-full flex-col">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Software Development & API Usage</p>
                <p className="mt-2 text-sm/6 text-gray-600">
                  Created a responsive, user-friendly website interface that tracks real-time AQI & oﬀers tailored health recommendations 
                  using Weather, OpenAI,& AQI APIs.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center p-8">
                <Image 
                  className="rounded-xl shadow-md w-full object-cover"
                  src="/images/aqi.png"
                  alt="AQI Project"
                  width={500}
                  height={300}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-[var(--palette-blood-orange)]/90 opacity-0 transition-opacity duration-300 hover:opacity-100">
                <a href="https://github.com/AQH-scale/AQH-scale.github.io" className="text-white bg-[var(--discord-gray)] hover:bg-solid-orange-10 font-medium rounded-lg text-sm px-5 py-2.5 mx-2">Repository</a>
                <a href="https://devpost.com/software/air-quality-health" className="text-white bg-[var(--discord-gray)] hover:bg-solid-orange-10 font-medium rounded-lg text-sm px-5 py-2.5 mx-2">Devpost</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
