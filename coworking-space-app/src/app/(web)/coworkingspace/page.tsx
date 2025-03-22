import CoworkingList from "@/components/CoworkingList";

export default function CoworkingSpacePage() {
  return (
    <div className="pt-[70px] pb-20 px-6 max-w-7xl mx-auto min-h-[calc(100vh-120px)] flex flex-col">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-sky-800">Our Coworking Spaces</h1>
        <p className="text-gray-600 mt-2">Choose the perfect space for your productivity</p>
      </div>

      <CoworkingList />
    </div>
  );
}
