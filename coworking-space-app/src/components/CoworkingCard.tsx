import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
  name: string;
  location: string;
  image: string;
  hours: string;
  features?: string[];
};

export default function CoworkingCard({
  id,
  name,
  location,
  image,
  hours,
  features = [],
}: Props) {
  const router = useRouter();

  return (
    <div
      className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden cursor-pointer"
      onClick={() => router.push(`/coworkingspace/${id}`)} // 👈 กดที่การ์ด → ไปหน้า Coworking Detail
    >
      {/* รูปภาพ */}
      <div className="relative h-48 w-full">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      {/* เนื้อหา */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-sky-700">{name}</h2>
        <p className="text-gray-500">{location}</p>
        <p className="text-sm text-gray-400 mt-1">{hours}</p>

        {/* ฟีเจอร์ */}
        {features.length > 0 && (
          <ul className="mt-4 text-sm text-gray-600 list-disc pl-4">
            {features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        )}

        {/* ปุ่ม Reserve */}
        <button
          className="mt-6 bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700 transition"
          onClick={(e) => {
            e.stopPropagation(); // ❗ ป้องกันไม่ให้การ์ดพาไปหน้าหลัก
            router.push("/reservations"); // 👉 ไปหน้าจอง
          }}
        >
          Reserve Now
        </button>
      </div>
    </div>
  );
}
