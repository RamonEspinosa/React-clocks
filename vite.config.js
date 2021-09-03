/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-clocks/",
  plugins: [reactRefresh()],
});
