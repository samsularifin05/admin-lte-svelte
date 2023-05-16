import { writable } from "svelte/store";

export const themeStore = writable({
  handleSidebar: true,
  handleContent: true,
  handleFooter: true,
  handleHeader: true,
  menuSidebarCollapsed: false
});
