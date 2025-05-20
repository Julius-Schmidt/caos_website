// src/components/PlatformSection.tsx

import Navbar from './Navbar'
import mockup from '../assets/mock.svg'
import AppStore from '../assets/App_Store_Badge.svg'
import PlayStore from '../assets/Play_Store_badge.svg'

export default function PlatformSection() {
  return (
    <>
      {/* Navbar at top */}
      <Navbar />

      {/* 
        Section = viewport height minus a 5rem navbar.
        Children now stretch (no items-center).
      */}
      <section
        id="download"
        className="w-full flex h-[calc(100vh-8rem)]"
        style={{ paddingLeft: '10vw', paddingRight: '10vw' }}
      >
        {/* Left column: 5-row grid for 30%/auto/20%/auto/30% spacing */}
        <div className="flex-1 grid h-full grid-rows-[30%_auto_20%_auto_30%]">
          {/* Row 2: your headline */}
          <div className="row-start-2">
            <h1 className="text-[60px] font-['Lilita_One',cursive]">
              Hello, we are CAOS
            </h1>
          </div>

          {/* Row 4: your store badges */}
          <div className="row-start-4 flex space-x-16">
            <a
              href="https://apps.apple.com/app/idYOUR_APP_ID"
              target="_blank"
              rel="noopener"
            >
              <img
                src={AppStore}
                alt="Download on the App Store"
                className="h-16"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=YOUR_APP_ID"
              target="_blank"
              rel="noopener"
            >
              <img
                src={PlayStore}
                alt="Get it on Google Play"
                className="h-16"
              />
            </a>
          </div>
        </div>

        {/* Right column: enlarged mockup, vertically centered */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={mockup}
            alt="App mockup"
            className="w-80 lg:w-[600px] drop-shadow-xl"
          />
        </div>
      </section>
    </>
  )
}
