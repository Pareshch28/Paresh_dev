import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: set `base` to "/<your-repo-name>/" before deploying to GitHub Pages,
// e.g. base: "/paresh-portfolio/". If you deploy to a *.github.io user/org page
// (repo named "<username>.github.io"), leave base as "/".
export default defineConfig({
  plugins: [react()],
  base: "/Paresh_dev/",
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
