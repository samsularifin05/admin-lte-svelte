// windowSize.js
import { writable } from "svelte/store";
import { onMount } from "svelte";

export const calculateWindowSize = (windowWidth: number) => {
  if (windowWidth >= 1200) {
    return "lg";
  }
  if (windowWidth >= 992) {
    return "md";
  }
  if (windowWidth >= 768) {
    return "sm";
  }
  return "xs";
};

export const windowSize = writable({
  width: 0,
  height: 0
});

export const useWindowSize = () => {
  onMount(() => {
    const handleResize = () => {
      windowSize.set({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set ukuran saat komponen dimuat

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return windowSize;
};

export const removeWindowClass = (classList: string) => {
  const window: HTMLElement | null = document && document.getElementById("app");
  if (window) {
    // @ts-ignore
    window.classList.remove(classList);
  }
};

export const addWindowClass = (classList: string) => {
  const window: HTMLElement | null = document && document.getElementById("app");
  if (window) {
    // @ts-ignore
    window.classList.add(classList);
  }
};
