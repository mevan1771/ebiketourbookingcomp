if (process.env.SUPPRESS_BEAUTIFUL_DND_WARNINGS) {
  const originalConsoleWarn = console.warn;
  console.warn = function filterWarnings(msg, ...args) {
    if (typeof msg === 'string' && msg.includes('Support for defaultProps will be removed from memo components')) {
      return;
    }
    originalConsoleWarn(msg, ...args);
  };
}