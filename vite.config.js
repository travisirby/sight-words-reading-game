import basicSsl from '@vitejs/plugin-basic-ssl';

// HTTPS is only needed when testing on the iPad over the network:
// iOS Safari blocks the microphone (speech recognition) on plain http.
// Use `npm run dev:ipad` for that; plain `npm run dev` serves http.
const useHttps = !!process.env.HTTPS;

export default {
  base: './',
  plugins: useHttps ? [basicSsl()] : [],
  // Honor a harness-assigned port (e.g. Claude preview) when set.
  server: process.env.PORT ? { port: Number(process.env.PORT), strictPort: true } : {},
};
