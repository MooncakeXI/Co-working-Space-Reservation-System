"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    telephone_number: "",
    role: "user",
  });

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("https://project-backend-co-working-space.vercel.app/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));
      console.log("REGISTER RESPONSE", res.status, data);

      if (res.ok && data.success) {
        alert("Account created! You can now sign in.");
        router.push("/api/auth/signin");
      } else {
        alert(data.msg || data.error || "Registration failed");
      }
    } catch (error) {
      console.error("Register error:", error);
      alert("Something went wrong during registration.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-cyan-50 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full space-y-4"
      >
        <h2 className="text-2xl font-bold text-sky-700 text-center mb-4">Create Your Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-sky-500 text-black"
        />
        <input
          type="email"
          placeholder="Email Address"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-sky-500 text-black"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          onChange={(e) => setForm({ ...form, telephone_number: e.target.value })}
          required
          className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-sky-500 text-black"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-sky-500 text-black"
        />

        <button
          type="submit"
          className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded transition"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
