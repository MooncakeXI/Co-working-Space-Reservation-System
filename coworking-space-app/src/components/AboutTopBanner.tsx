import React from 'react'

function AboutTopBanner() {
  return (
<div
  className="relative min-h-[40vh] bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: "url(/img/coworking-banner1.jpg)" }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content box */}
  <div className="relative z-10 text-center px-6 py-12 bg-white/10 backdrop-blur-sm rounded-md shadow-lg max-w-2xl animate-fade-up">
    <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-md mb-4">
      Empowering Your Workday
    </h1>
    <h2 className="text-2xl md:text-3xl font-light text-white drop-shadow-sm">
      With the Perfect Coworking Experience
    </h2>
  </div>
</div>
  )
}

export default AboutTopBanner