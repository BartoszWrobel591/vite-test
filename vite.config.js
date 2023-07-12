import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import inspect from 'vite-plugin-inspect';


function makeReporterPlugin(msg) {
  return () => {
    return {
      pre() {
        console.log('[PLUGIN] pre', msg);
      },
      visitor: {
        Program: {
          enter: () => {
            console.log('[PLUGIN] Program', msg);
          }
        }
      },
      post() {
        console.log('[PLUGIN] post', msg);
      },
    };
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ babel: { plugins: [makeReporterPlugin('lama')] } }), svgr(), inspect()],
  build: {
    manifest: true,
    rollupOptions: {
      input: "./src/main.jsx",
    },
  },
});
