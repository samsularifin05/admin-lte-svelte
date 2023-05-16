import { doDecrypt, doEncrypt } from "./Encrypt";
import { onMount, afterUpdate, onDestroy } from "svelte";
export const getItem = (nama) => {
  return localStorage.getItem(doEncrypt(nama)) === null
    ? []
    : doDecrypt(JSON.parse(localStorage.getItem(doEncrypt(nama)) || "[]"));
};

export const setItem = (nama, data) => {
  localStorage.setItem(doEncrypt(nama), JSON.stringify(doEncrypt(data)));
};

export const removeItem = (nama) => {
  localStorage.removeItem(doEncrypt(nama));
};

export const addWindowClass = (classList) => {
  // @ts-ignore
  const window = document.getElementById("app");
  if (window) {
    // @ts-ignore
    window.classList.add(classList);
  }
};

export const calculateWindowSize = (windowWidth) => {
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

export const useWindowSize = () => {
  let windowSize = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  onMount(() => {
    function handleResize() {
      windowSize = {
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return windowSize;
};

export const removeWindowClass = (classList) => {
  const window = document && document.getElementById("app");
  if (window) {
    window.classList.remove(classList);
  }
};
