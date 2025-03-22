import React from 'react'

function AboutMidBanner() {
  return (
<div
        className="relative min-h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url(/img/coworking-banner2.jpg)" }}
        >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content box */}
        <div className="relative z-10 text-center px-6 py-10 bg-white/10 backdrop-blur-sm rounded-md shadow-lg max-w-3xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md mb-4">
            Our Mission
            </h1>
            <p className="text-xl md:text-2xl text-white leading-relaxed drop-shadow-sm">
            We aim to provide more than just a desk — we deliver community, creativity,
            and convenience. From finding the right space to enhancing your productivity,
            we’re here to support every step of your work journey.
            </p>
        </div>
        </div>
  )
}

export default AboutMidBanner