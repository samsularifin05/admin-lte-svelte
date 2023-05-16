import "./assets/css/index.css";
import App from "./App.svelte";
import "@fortawesome/fontawesome-free/css/all.min.css";

const app = new App({
  target: document.getElementById("app")
});

export default app;
