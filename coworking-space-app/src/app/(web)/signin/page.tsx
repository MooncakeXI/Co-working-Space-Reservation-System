"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import userLogin from "@/libs/userLogin";
import useAuthStore from "@/stores/useAuthStore";

export default function SignInPage() {
  const router = useRouter();
  const { login } = useAuthStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await userLogin(email, password);

      if (result.token) {
        const payload = JSON.parse(atob(result.token.split(".")[1]));
        const userId = payload.id;

        // ดึงข้อมูลผู้ใช้เพื่อดู role
        const res = await fetch("https://project-backend-co-working-space.vercel.app/api/v1/auth/me", {
          headers: {
            Authorization: `Bearer ${result.token}`,
          },
        });

        const user = await res.json();
        const role = user?.data?.role || "user";

        // บันทึกเข้าสู่ Zustand store
        login(result.token, userId, role);

        alert("Login successful!");
        router.push("/");
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Invalid email or password.");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-cyan-50 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md max-w-md w-full space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-sky-700">
          Sign In to Your Account
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500 text-black"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500 text-black"
        />

        <button
          type="submit"
          className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded transition"
        >
          Sign In
        </button>

        <p className="text-center text-gray-500 text-sm">
          Don't have an account? <a href="/register" className="text-sky-600 hover:underline">Register here</a>
        </p>
      </form>
    </main>
  );
}
