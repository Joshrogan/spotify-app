import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/spotify-app/",
  plugins: [react()],
  define: {
    "process.env": process.env,
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
  },
});
