import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

const useAuthStore = create(
  persist(
    (set, get) => ({
      userProfile: null,
      addUser: (user: any) => set({ userProfile: user }),
      removeUser: () => set({ userProfile: null }),
    }),
    {
      name: "auth",
    }
  )
);

export default useAuthStore;
