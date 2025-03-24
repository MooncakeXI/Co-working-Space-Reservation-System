"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import getUserProfile from "@/libs/getUserProfile";
import useAuthStore from "@/stores/useAuthStore";
import useHydrated from "@/stores/useHydrated";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function ProfilePage() {
  const { token, isLoggedIn, logout } = useAuthStore();
  const hydrated = useHydrated();
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    if (!hydrated) return; // ✅ รอ hydrated ก่อน

    if (!isLoggedIn || !token) {
      router.push("/signin");
      return;
    }

    const fetchProfile = async () => {
      try {
        const result = await getUserProfile(token);
        if (result.success) {
          setUser(result.data);
        } else {
          alert("Failed to fetch user data");
          logout();
          router.push("/signin");
        }
      } catch (err) {
        console.error("Error fetching profile:", err);
        logout();
        router.push("/signin");
      }
    };

    fetchProfile();
  }, [hydrated, isLoggedIn, token]);

  // ✅ ป้องกัน render ก่อน hydrate เสร็จ
  if (!hydrated) return null;

  if (!user) {
    return (
      <div className="p-6 text-center text-gray-500 animate-pulse">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-[80px] px-4 pb-16 bg-gradient-to-b from-white to-cyan-50 flex justify-center">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-xl p-8 space-y-6 animate-fade-up">
        <div className="flex items-center gap-4 border-b border-gray-200 pb-4">
          <AccountCircleIcon className="text-sky-600" style={{ fontSize: 50 }} />
          <div>
            <h2 className="text-3xl font-bold text-sky-800">
              {user.name || "No Name"}
            </h2>
            <p className="text-sm text-gray-500">Welcome to your dashboard</p>
          </div>
        </div>

        <div className="grid gap-4 text-sm md:text-base text-gray-700">
          <p>
            <span className="font-semibold text-sky-700">📧 Email:</span>{" "}
            {user.email}
          </p>
          <p>
            <span className="font-semibold text-sky-700">📞 Phone:</span>{" "}
            {user.telephone_number || "-"}
          </p>
          <p>
            <span className="font-semibold text-sky-700">🎖️ Role:</span>{" "}
            <span
              className={`px-2 py-1 rounded text-white ${
                user.role === "admin" ? "bg-purple-500" : "bg-sky-500"
              }`}
            >
              {user.role}
            </span>
          </p>
        </div>

        <div className="flex justify-end pt-4">
          <button
            onClick={() => {
              logout();
              router.push("/signin");
            }}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded shadow-sm transition"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}