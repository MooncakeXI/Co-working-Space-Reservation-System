export default function About() {
    return (
      <>
        {/* Hero Section */}
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

  
        {/* Intro Paragraph */}
        <div className="bg-white py-16">
          <div className="container mx-auto lg:w-2/3 px-6 animate-fade-up text-center space-y-8">
            <p className="text-lg leading-relaxed text-gray-700">
              Welcome to our coworking space platform – where innovation meets
              flexibility. We are redefining how people find and reserve
              workspaces. Whether you're a freelancer, startup, or remote team,
              our goal is to make your workspace experience seamless, accessible,
              and tailored to your productivity needs.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              We believe everyone deserves a workspace that fits their lifestyle.
              That’s why we’ve created a reservation system with no hidden fees,
              flexible bookings, and access to top-tier coworking environments.
              Join us in shaping the future of work — one reservation at a time.
            </p>
          </div>
        </div>
  
        {/* Our Mission Section */}
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
  
       {/* Meet Our Team */}
        <div className="container mx-auto py-20 px-6 bg-white shadow-lg">
        <h1 className="text-4xl text-sky-900 text-center font-bold mb-4">
            Meet Our Team
        </h1>
        <p className="text-center text-gray-500 mb-10">
            The people behind our coworking revolution
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 animate-fade-up">
            {[
            {
                name: "Suvijak Phuphakdeepan",
                SID: "6733280721",
                img: "/img/marc.jpg",
            },
            {
                name: "Watthanakorn Rakthong",
                SID: "6633224521",
                img: "/img/profile_vine.jpg",
            },
            ].map((member, i) => (
            <div
                key={i}
                className="w-full max-w-xs bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
                <div className="h-[350px] w-full overflow-hidden">
                <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                />
                </div>
                <div className="p-6 text-center">
                <h2 className="text-xl font-bold text-sky-700 mb-2">
                    {member.name}
                </h2>
                <p className="text-gray-600 font-mono">{member.SID}</p>
                </div>
            </div>
            ))}
        </div>
        </div>

      </>
    );
  }
  