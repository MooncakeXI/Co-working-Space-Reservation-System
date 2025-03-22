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
      const res = await fetch("http://localhost:5000/api/v1/auth/register", {
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold text-center">Register</h2>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
        className="border p-2"
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
        className="border p-2"
      />
      <input
        type="tel"
        placeholder="Telephone Number"
        onChange={(e) => setForm({ ...form, telephone_number: e.target.value })}
        required
        className="border p-2"
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        required
        className="border p-2"
      />
      <button type="submit" className="bg-cyan-600 text-white py-2 mt-2">
        Create Account
      </button>
    </form>
  );
}
