import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const isGithub = mode === "github";

  return {
    base: isGithub ? "/ptarch/" : "/",
    plugins: [react(), tailwindcss()],
    server: {
      host: true,
    },
  };
});
