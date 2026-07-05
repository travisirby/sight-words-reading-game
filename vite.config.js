import basicSsl from '@vitejs/plugin-basic-ssl';

// HTTPS is only needed when testing on the iPad over the network:
// iOS Safari blocks the microphone (speech recognition) on plain http.
// Use `npm run dev:ipad` for that; plain `npm run dev` serves http.
const useHttps = !!process.env.HTTPS;

export default {
  base: './',
  // Preview tooling assigns a port via $PORT; default stays 5173.
  server: { port: Number(process.env.PORT) || 5173 },
  plugins: useHttps ? [basicSsl()] : [],
  // Honor an assigned port (e.g. from the preview harness) instead of 5173.
  server: process.env.PORT ? { port: Number(process.env.PORT) } : {},
};
