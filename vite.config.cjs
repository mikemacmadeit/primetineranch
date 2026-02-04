const react = require('@vitejs/plugin-react');

// #region agent log
const DEBUG_LOG = (payload) => { fetch('http://127.0.0.1:7242/ingest/92b04182-9c32-4606-8602-6c34cbd0474d', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...payload, timestamp: Date.now(), sessionId: 'debug-session' }) }).catch(() => {}); };
DEBUG_LOG({ hypothesisId: 'H3', location: 'vite.config.cjs', message: 'vite config module loading', data: {} });
// #endregion

/** @type {import('vite').UserConfig} */
module.exports = {
  plugins: [
    react(),
  ],
  // #region agent log
  configureServer(server) {
    DEBUG_LOG({ hypothesisId: 'H4', location: 'vite.config.cjs:configureServer', message: 'configureServer called', data: {} });
    server.httpServer?.once('listening', () => {
      const addr = server.httpServer?.address();
      DEBUG_LOG({ hypothesisId: 'H2', location: 'vite.config.cjs:listening', message: 'server listening', data: { port: addr?.port, address: addr?.address } });
    });
  },
  // #endregion
};
