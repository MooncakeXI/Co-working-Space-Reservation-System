import React from 'react'

function AboutTeam() {
  return (
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
                img: "/img/korn.jpg",
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
  )
}

export default AboutTeam