import { writable } from "svelte/store";

// Inisialisasi data awal
const initialData = {
  handleSidebar: true,
  handleContent: true,
  handleFooter: true,
  handleHeader: true
};

// Buat store untuk menyimpan data
export const themeStore = writable(initialData);
