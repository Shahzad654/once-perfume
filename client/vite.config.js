import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Listen on all network interfaces (make accessible on the local network)
    port: 5173, // Use port 5173 or any other port if you prefer
  },
});
