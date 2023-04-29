import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import { BASE_URL } from "@/utils";
const useAuthStore = create(
  persist(
    (set, get) => ({
      userProfile: null,
      addUser: (user: any) => set({ userProfile: user }),
      removeUser: () => set({ userProfile: null }),
      fetchAllUser: async () => {
        const response = await axios.get(`${BASE_URL}/api/users`);
      },
    }),
    {
      name: "auth",
    }
  )
);

export default useAuthStore;
