import { readable, writable } from "svelte/store";
import { calculateWindowSize } from "../../lib/utils/utils";

interface LoadingModel {
  content: boolean;
  button: boolean;
  tabel: boolean;
}

interface ModelModal {
  isModalShow: boolean;
  isEdit: boolean;
  data: any;
}

interface ScreenSizeState {
  screenSize: string;
  setScreenSize: (width: string) => void;
}

interface SidebarState {
  menuSidebarCollapsed: boolean;
  toggleSidebar: () => void;
}

// Gunakan writable agar bisa diperbarui
export const loading = writable<LoadingModel>({
  content: false,
  button: false,
  tabel: false
});

// Gunakan writable agar modal bisa berubah
export const modalState = writable<ModelModal>({
  isModalShow: false,
  isEdit: false,
  data: null
});

// Gunakan writable agar ukuran layar bisa berubah
export const screenSizeState = writable<ScreenSizeState>({
  screenSize: calculateWindowSize(
    typeof window !== "undefined" ? window.innerWidth : 0
  ),
  setScreenSize: (width: string) => {
    screenSizeState.update((state) => ({ ...state, screenSize: width }));
  }
});

// Gunakan writable agar sidebar bisa di-toggle
export const sidebarState = writable<SidebarState>({
  menuSidebarCollapsed: false,
  toggleSidebar: () => {
    sidebarState.update((state) => ({
      ...state,
      menuSidebarCollapsed: !state.menuSidebarCollapsed
    }));
  }
});
