import Image from "next/image";
import getCoworkingspace from "@/libs/getCoworkingspace";

export default async function CoworkingDetailPage({ params }: { params: { cid: string } }) {
  const { data: coworking } = await getCoworkingspace(params.cid);

  return (
    <main className="min-h-screen pt-[80px] pb-20 px-4 bg-gradient-to-b from-white to-cyan-50 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6 md:p-10 flex flex-col gap-6 animate-fade-up">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-sky-800 text-center">
          {coworking.name}
        </h1>

        {/* Image + Details */}
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          {/* Image */}
          <div className="relative w-full md:w-[40%] h-60 md:h-72 rounded-lg overflow-hidden shadow">
            <Image
              src={coworking.image || "/img/cover.jpg"}
              alt={coworking.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex-1 text-gray-700 space-y-3 text-sm md:text-base">
            <div>
              <span className="font-semibold text-sky-800">Address:</span>{" "}
              {coworking.address || "N/A"}
            </div>
            <div>
              <span className="font-semibold text-sky-800">Phone:</span>{" "}
              {coworking.telephone_number || "N/A"}
            </div>
            <div>
              <span className="font-semibold text-sky-800">Open Hours:</span>{" "}
              {coworking.openTime} - {coworking.closeTime}
            </div>
          </div>
        </div>

        {/* Optional: CTA */}
        <div className="text-center mt-4">
          <a
            href={`/reservations?model=${encodeURIComponent(coworking.name)}&id=${coworking._id}`}
            className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-2 rounded-lg transition"
          >
            Book This Space
          </a>
        </div>
      </div>
    </main>
  );
}
