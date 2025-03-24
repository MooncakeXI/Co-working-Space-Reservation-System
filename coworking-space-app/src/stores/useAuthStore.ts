import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  token: string | null;
  userId: string | null;
  role: string | null;
  isLoggedIn: boolean;
  login: (token: string, userId: string, role: string) => void;
  logout: () => void;
};

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      userId: null,
      role: null,
      isLoggedIn: false,

      login: (token, userId, role) =>
        set({
          token,
          userId,
          role,
          isLoggedIn: true,
        }),

      logout: () =>
        set({
          token: null,
          userId: null,
          role: null,
          isLoggedIn: false,
        }),
    }),
    {
      name: "auth-storage", // key name ใน localStorage
    }
  )
);

export default useAuthStore;
