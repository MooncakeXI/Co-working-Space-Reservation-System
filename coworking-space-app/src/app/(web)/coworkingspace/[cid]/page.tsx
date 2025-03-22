import Image from "next/image";
import getCoworkingspace from "@/libs/getCoworkingspace";

export default async function CoworkingDetailPage({ params }: { params: { cid: string } }) {
  const coworking = await getCoworkingspace(params.cid);

  return (
    <main className="text-center p-5 pt-[80px] pb-20 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-sky-800 mb-6">{coworking.name}</h1>

      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center gap-8">
        <Image
          src={coworking.image}
          alt="Coworking Image"
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg w-full md:w-[40%] object-cover"
        />

        <div className="text-left space-y-2 text-gray-700">
          <div><span className="font-semibold">Location:</span> {coworking.location}</div>
          <div><span className="font-semibold">Hours:</span> {coworking.hours}</div>
          {coworking.features?.length > 0 && (
            <div>
              <span className="font-semibold">Features:</span>
              <ul className="list-disc list-inside ml-4 mt-1">
                {coworking.features.map((f: string, i: number) => <li key={i}>{f}</li>)}
              </ul>
            </div>
          )}
        </div>
      </div>

    </main>
  );
}
