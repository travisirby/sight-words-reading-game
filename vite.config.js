import basicSsl from '@vitejs/plugin-basic-ssl';

// HTTPS is only needed when testing on the iPad over the network:
// iOS Safari blocks the microphone (speech recognition) on plain http.
// Use `npm run dev:ipad` for that; plain `npm run dev` serves http.
const useHttps = !!process.env.HTTPS;

export default {
  base: './',
  // Dev harnesses assign a port via $PORT; fall back to vite's default.
  server: { port: Number(process.env.PORT) || 5173 },
  plugins: useHttps ? [basicSsl()] : [],
};
