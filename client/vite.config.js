import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // This makes the server accessible on any network interface
    port: 5173, // Or whatever port you're using
  },
});
