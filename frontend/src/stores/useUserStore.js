import { create } from "zustand";
import axios from "../lib/axios.js";
import { toast } from "react-hot-toast";

// toast allows us to show notifications to user

// benefit of creating a store is that we can now use these values in any components with ease
export const useUserStore = create((set, get) => ({
  user: null,
  loading: false,
  checkingAuth: true,

  signup: async ({ name, email, password, confirmPassword }) => {
    set({ loading: true });

    if (password != confirmPassword) {
      set({ loading: false });
      toast.error("Passwords do not match");
    }

    try {
      const res = await axios.post("/auth/signup", { name, email, password });
      set({ user: res.data, loading: false });
    } catch (error) {
      set({ loading: false });
      toast.error(error.response.data.message || `An error occured!`);
    }
  },
}));
