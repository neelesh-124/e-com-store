import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "../lib/axios.js";

export const useProductStore = create((set) => ({
  products: [],
  loading: false,
  setProducts: (products) => set(products),

  createProduct: async (productData) => {
    set({ loading: true });
    try {
      console.log("data", productData);
      const res = await axios.post("/products", productData);
      set((prevState) => ({
        products: [...prevState.products, res.data],
        loading: false,
      }));
      console.log("Done!!");
    } catch (error) {
      toast.error(error);
      set({ loading: false });
    }
  },

  fetchAllProducts: async (id) => {
    set({ loading: true });
    try {
      const response = await axios.get("/products");
      set({ products: response.data.products, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch products", loading: false });
      toast.error(error.response.data.error || "Failed to fetch products");
    }
  },
  deleteProduct: async (id) => {},
  toggleFeaturedProduct: async (id) => {},
}));
