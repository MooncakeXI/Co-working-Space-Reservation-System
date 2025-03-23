import CoworkingList from "@/components/CoworkingList";

export default function CoworkingSpacePage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-cyan-50 pt-[70px] pb-20 px-6 flex flex-col items-center">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-sky-800">Our Coworking Spaces</h1>
        <p className="text-gray-600 mt-2">Choose the perfect space for your productivity</p>
      </div>

      <div className="w-full max-w-7xl">
        <CoworkingList />
      </div>
    </div>
  );
}
